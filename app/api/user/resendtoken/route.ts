import prismaClient from "@/prisma/client";
import { generateOTP, getAuthenticatedUser, getTimeFromNow } from "@/utils/server/util";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { mailSender } from "@/utils/server/sendMail";

export async function POST(request:Request){

    //get verifcation token
    const verificationToken = cookies().get("verify-token")
    if(!verificationToken){
        return NextResponse.json({error:"Session expired",status:440})
    }

    //get user object from former token
    const token = await prismaClient.mailVerificationOTp.findUnique({
        where:{
            id:verificationToken.value
        },
        include:{
            user:true
        }
    })

    if(!token){
        return NextResponse.json({error:"Token mutated, relog in",status:440})
    }
        //delete all pending otp code from the database
    await prismaClient.mailVerificationOTp.deleteMany({
        where:{
            userId:token.user.id
        }
    })
    const Otp = generateOTP()
    const otpCode = await prismaClient.mailVerificationOTp.create({
        data:{
            otpCode:Otp,
            userId:token.user.id,
            expiredTime:getTimeFromNow(Number(process.env.OTP_EXPIRY_MINUTE)),
        }
    })
    //set broswer cookie
    cookies().set({
        name:"verify-token",
        value:otpCode.id,
        maxAge:60* Number(process.env.OTP_EXPIRY_MINUTE)
    })
    mailSender({to:token.user.email,subject:"Utilor SignInOTp",body:otpCode?.otpCode,name:`${token.user.firstName} ${token.user.lastName}`})
    return NextResponse.json({status:200,data:"verify email"}) 
}