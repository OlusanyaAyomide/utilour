import { NextRequest, NextResponse } from "next/server";
import { validateData } from "@/utils/server/withValidation";
import { signUpSchema } from "@/utils/validations";
import { mailSender } from "@/utils/server/sendMail";
import prismaClient from "@/prisma/client";
import { bcryptHash, generateOTP, getTimeFromNow } from "@/utils/server/util";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ISignUpForm } from "@/interfaces/interface";



export async function POST(request:Request){
    let body:ISignUpForm
    //ensure body is of a valid type
    try{
        body = await request.json()
    }
    catch(err){
        return NextResponse.json({error:"Invalid Body sent"},{status:400})
    }
    console.log(body);
    
    const validatedData = await validateData(signUpSchema,body)
    if (validatedData){
        return NextResponse.json({error:validatedData.message},{status:422})
    }

    //check if email exist
    const isExisting = await prismaClient.user.findUnique({
        where:{
            email:body.email
        }
    })
    console.log(isExisting)
    if(isExisting){
        return NextResponse.json({status:400,error:"Email Already in use"})
    }

    //create new user
    const hashedPassword = await bcryptHash(body.password)
    const newUser = await prismaClient.user.create({
        data:{
            email:body.email,
            firstName:body.firstName,
            lastName:body.lastName,
            isVerified:false,
            isGoogleUser:false,
            password:hashedPassword
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
        maxAge:60* Number(process.env.OTP_EXPIRY_MINUTE)
    })
    mailSender({to:body.email,subject:"Utilor SignInOTp",body:otpCode,name:`${body.firstName} ${body.lastName}`})
    return NextResponse.json({status:200,email:body.email})

}


