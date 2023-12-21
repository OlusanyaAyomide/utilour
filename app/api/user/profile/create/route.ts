import { ICompleteProfile } from "@/interfaces/interface";
import paystack from "@/utils/server/paystack";
import { IP_NewCustomer } from "@/utils/server/paystackInterface";
import { getAuthenticatedUser } from "@/utils/server/util";
import { AxiosError, AxiosResponse } from "axios";
import { NextResponse } from "next/server";
import prismaClient from "@/prisma/client";

export async function POST(request:Request){
    const user = await  getAuthenticatedUser()
    if(!user){
        return NextResponse.json({error:"Unauthenicated"},{status:401})
    }
    console.log(user)
    let body:ICompleteProfile
    try{
        body = await request.json()
    }
    catch(err){
        return NextResponse.json({error:"Invalid Body sent"},{status:400})
    }

    //check if profile is already existing
    const profile  = await prismaClient.profile.findUnique({
        where:{
            userId:user.id
        }
    })

    if(profile){
        const updated = await prismaClient.profile.update({
            where:{
                userId:user.id
            },
            data:{
                userId:user.id,
                middleName:body.middleName,
                dateOfBirth:body.dateOfBirth,
                gender:body.gender,
                phoneNumber:body.phoneNumber,
                country:body.country,
                countryCode:body.countryCode
            }
        })
        return NextResponse.json({status:200})
    }

    
    try{
        const payStackUser = await paystack.post<AxiosResponse<IP_NewCustomer>>("/customer",{
        email:user.email,
        first_name: user.firstName,
        last_name: user.lastName,
        phone:`${body.countryCode}${body.phoneNumber}`
    })


    //create new payStack user
    if(payStackUser.status === 200){
        const data = payStackUser.data

        const newProfile = await prismaClient.profile.create({
            data:{
                userId:user.id,
                middleName:body.middleName,
                dateOfBirth:body.dateOfBirth,
                payStackCode:data.data.customer_code,
                gender:body.gender,
                phoneNumber:body.phoneNumber,
                country:body.country,
                countryCode:body.countryCode
            }
        })

        console.log(newProfile)
    }

    else{
        console.log(payStackUser,"Error")
    }
    }
    catch(err){
        console.log(err)
        return NextResponse.json({error:"Invalid Server Error"},{status:400})
    }


    return NextResponse.json({status:200})
    
}