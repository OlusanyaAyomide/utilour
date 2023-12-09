import  CredentialsProvider  from "next-auth/providers/credentials";
import { cookies } from 'next/headers'
import prismaClient from "@/prisma/client";
import { bcryptCompare, generateOTP ,bcryptHash,generateMerchantID} from "@/utils/server/util";
import { getTimeFromNow } from "@/utils/server/util";
import { mailSender } from "@/utils/server/sendMail";
import { ISignIn } from "@/interfaces/interface";
import { validateData } from "@/utils/server/withValidation";
import { SignInSchema, signUpSchema } from "@/utils/validations";
import { NextAuthOptions } from "next-auth";
import { getUserCredentials } from "./googleRequest";

export const authOptions:NextAuthOptions={
    session:{
        strategy:"jwt",
        maxAge:60 * 60
    },
    jwt:{
        maxAge:60 * 70
    },
    providers:[
        CredentialsProvider({
            type:"credentials",
            credentials:{},
            async authorize(credentials,req){
                // console.log(credentials,req)
                //validate incoming inpput
                try{
                    await validateData(SignInSchema,credentials)
                }catch(err){
                    throw Error ("verification failed")
                }

                //signIn users verifying with email
                const data = credentials as ISignIn
                
                //sign In OTP verifiction users
                if(data.otp && data.type === "email"){
                    //check if token in cookie is valid
                    const verificationToken = cookies().get("verify-token")
                    if(!verificationToken){
                        throw Error("session expired , relog In")
                    }
                    //verify if cookie and otp matches
                    const test = await prismaClient.mailVerificationOTp.findMany({
                        where:{
                            id:verificationToken.value
                        }
                    })
                    const otpVerification = await prismaClient.mailVerificationOTp.findFirst({
                        where:{
                            AND:[
                                {id:verificationToken.value},
                                {otpCode:data.otp}
                            ]
                        },
                        include:{
                            user:true
                        }
                    })
                    console.log("otp",otpVerification?.user)
                    if(!otpVerification){
                        throw Error("OTP Input invalid")
                    }
                    //check if Otp has not expired
                    const currentDate =  new Date()
                    if(currentDate>otpVerification.expiredTime){

                        throw Error("OTP already expired")
                    }
                    //update user verfication status
                    const updatedUser = await prismaClient.user.update({
                        where:{
                            id:otpVerification.user.id
                        },
                        data:{
                            isVerified:true
                        }
                    })
                    const {id,firstName,lastName,isVerified,email,merchantID} = updatedUser

                    
                    //delete used Otp
                    await prismaClient.mailVerificationOTp.delete({
                        where:{
                            id:otpVerification.id
                        }
                    })

                    //delete verification cookie
                    if(cookies().has("verify-token")){
                        cookies().delete('verify-token')
                    }

                    //store user data in session
                    return{
                        id,firstName,lastName,isVerified,email,merchantID
                    }  
                }
                //validate for email /password credentials signIn
                if(data.type === "signIn" && data.password && data.email){
                    const user = await prismaClient.user.findUnique({
                        where:{
                            email:data.email
                        },
                    })
                    //check if user email exists
                    if(!user){
                        throw Error("Invalid signIn details")
                    }
                    if(user.isGoogleUser){
                        throw Error("Sign In with google")
                    }
                    const isPasswordValid = await bcryptCompare({hashedPassword:user.password,password:data.password})
                    if(!isPasswordValid){
                        throw Error("Invalid signIn details .")
                    }
                    const {id,firstName,lastName,isVerified,email,merchantID} = user

                    if(isVerified){
                    //delete cookie if it exists for verified users 
                        if(cookies().has("verify-token")){
                            cookies().delete('verify-token')
                        }
                    }else{
                        //create new OTP object for users with unverified email
                        const otpCode = generateOTP()
                        await mailSender({to:user.email,subject:"Utilor SignInOTp",body:otpCode,name:`${user.firstName} ${user.lastName}`})
                        const newOtpObject = await prismaClient.mailVerificationOTp.create({
                        data:{
                            userId:id,
                            expiredTime:getTimeFromNow(Number(process.env.OTP_EXPIRY_MINUTE)),
                            otpCode
                        }
                        })
                        cookies().set({
                            name:"verify-token",
                            value:newOtpObject.id,
                            maxAge:60* Number(process.env.OTP_EXPIRY_MINUTE)
                            })
                    }

                    return{
                        id,firstName,lastName,isVerified,email,merchantID
                    }  
                }

            //signUp from  new google users 
            if(data.type === "google" && data.googleToken){
                const userData = await getUserCredentials({token:data.googleToken})
                if(!userData){
                    throw Error("Token is invalid")
                }
                //check if email already  exists
                const isExisting = await prismaClient.user.findUnique({
                    where:{
                        email:userData.email
                    }
                })
                if (isExisting){
                    throw Error("Email already exits")
                }
                console.log(userData)
                //create new user
                    const hashedPassword = await bcryptHash(`${userData.id}${process.env.JWT_SECRET}`)
                    const merchantdID = `#${generateMerchantID()}`
                    const newUser = await prismaClient.user.create({
                        data:{
                            email:userData.email,
                            firstName:userData.given_name ||  "Not set",
                            lastName:userData.family_name || "Not Set",
                            isVerified:true,
                            isGoogleUser:true,
                            merchantID:merchantdID,
                            password:hashedPassword
                        }      
                    })
                    const {id,firstName,lastName,isVerified,email,merchantID} = newUser
                    
                    return{
                        id,firstName,lastName,isVerified,email,merchantID
                    }  

            }

            //googleSignIn
            if(data.type === "googlesignIn" && data.googleToken){
                const userData = await getUserCredentials({token:data.googleToken})
                if(!userData){
                    throw Error("Token is invalid")
                }
                //check if email exists in the database
                const user = await prismaClient.user.findUnique({
                    where:{
                        email:userData.email
                    }
                })
                if(!user){
                    throw Error("Email not found")
                }
                if(!user.isGoogleUser){
                    throw Error("Sign in with your password")
                }
                const {id,firstName,lastName,isVerified,email,merchantID} = user

                return {
                    id,firstName,lastName,isVerified,email,merchantID
                }  

            }

            throw Error ("Unable to process request")
            }
        })
    ],
    callbacks:{
        jwt(params:any){

            const user = params.user  as any
            // console.log(user)
            console.log(params.user)
            return params
        },
        session({session,token,user}){
            
            if(session.user){
                const userSession = token?.token as unknown as any
                return userSession.user
            }
            else{
                return null
            }
        },
    },
    secret:process.env.JWT_SECRET
} as NextAuthOptions