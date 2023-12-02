'use server'

import { ILogInForm, ISignUpForm } from "@/interfaces/interface";
import { logInSchema,signUpSchema } from "@/utils/validations";
import catchAsync,{redirectAsync} from "@/utils/server/catchAsync";
import { mailSender } from "@/utils/server/sendMail";
import prismaClient from "@/prisma/client";
import { bcryptHash, generateMerchantID, generateOTP, getTimeFromNow } from "@/utils/server/util";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export const A_SignUpUser =catchAsync(async (data:ISignUpForm)=>{
    //validate input 
    try{
         await signUpSchema.validate(data)   
    } catch(err:any){
        const error = err.errors[0] || err.message || "Unknown error occured" 
        return error
    }
 
    //check for existing email
    const isExisting = await prismaClient.user.findUnique({
        where:{
            email:data.email
        }
    })
    if(isExisting){
        return {status:400,error:"Email Already in use"}
    }

    //create new user
    const hashedPassword = await bcryptHash(data.password)
    const merchantId = generateMerchantID()
    const newUser = await prismaClient.user.create({
        data:{
            email:data.email,
            firstName:data.firstName,
            lastName:data.lastName,
            isVerified:false,
            isGoogleUser:false,
            password:hashedPassword,
            merchantID:merchantId
        }      
    })

    const otpCode = generateOTP()
    //create new OTP object
    const newOtpObject = await prismaClient.mailVerificationOTp.create({
        data:{
            userId:newUser.id,
            expiredTime:getTimeFromNow(Number(process.env.OTP_EXPIRY_MINUTE)),
            otpCode
        }
    })

    //set user cookie to be used while verfying the otp
    cookies().set({
        name:"verify-token",
        value:newOtpObject.id,
        maxAge:1000 * 60* Number(process.env.OTP_EXPIRY_MINUTE)
    })
    // await mailSender({to:data.email,subject:"Utilor SignInOTp",body:otpCode})
    
    return redirect('/user/verify')
})










export const A_SignInUser = catchAsync(async (data:ILogInForm)=>{
       console.log(data)
       const validatedData = await logInSchema.validate(data)
        return {message:"sucess"}
})


export const A_VerifyMail= catchAsync(async(data:{pin:string})=>{
    console.log(data)
    return {message:"Pin success"}
})