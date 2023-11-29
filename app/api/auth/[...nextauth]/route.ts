import { ISignIn } from "@/interfaces/interface";
import { validateData } from "@/utils/server/withValidation";
import { SignInSchema, signUpSchema } from "@/utils/validations";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { cookies } from 'next/headers'
import prismaClient from "@/prisma/client";
import { bcryptCompare } from "@/utils/server/util";

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
                        throw Error("Session expired , relog In")
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
                    const {id,firstName,lastName,isVerified} = updatedUser
                    //store user data in session
                    return{
                        id,firstName,lastName,isVerified
                    }  
                }
                //validate for email /password credentials signIn
                if(data.type === "signIn" && data.password && data.email){
                    const user = await prismaClient.user.findUnique({
                        where:{
                            email:data.email
                        },
                    })
                    //check email presence
                    if(!user){
                        throw Error("Invalid signIn details")
                    }
                    const isPasswordValid = await bcryptCompare({hashedPassword:user.password,password:data.password})
                    if(!isPasswordValid){
                        throw Error("Invalid signIn details .")
                    }
                    const {id,firstName,lastName,isVerified} = user
                    return{
                        id,firstName,lastName,isVerified
                    }  
                }
            throw Error ("Not processed")
            }
        })
    ],
    callbacks:{
        jwt(params:any){
            console.log(params,"firedd")
            const user = params.user  as any
            // console.log(user)
            console.log(params.user)
            return params
        },
        session({session,token,user}){
            console.log("triggered")
            console.log(token,"token session")
            
            // console.log("sessio fired",token)
            // console.log(token,"token",session,"session",user,"user")
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

const authHandler=NextAuth(authOptions);

export {authHandler as GET,authHandler as POST}