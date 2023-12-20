import { ICompleteProfile } from "@/interfaces/interface";
import { getAuthenticatedUser } from "@/utils/server/util";
import { NextResponse } from "next/server";

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
    return NextResponse.json({error:"confirmed",status:200})
    
}