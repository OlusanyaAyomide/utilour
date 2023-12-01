import bcrypt from "bcrypt";
import {getServerSession} from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { ISessionInterface } from "@/interfaces/interface";


export function generateOTP(): string {
  const otpLength = 4;
  let otp = '';
  for (let i = 0; i < otpLength; i++) {
    otp += Math.floor(Math.random() * 10).toString();
  }
  return otp;
}

//get a future dateTime
export function getTimeFromNow(futureTime:number){
    const timeFromNow = new Date()
    const dateTimeIn30Minutes = new Date(timeFromNow.getTime() + futureTime * 60000)
    return dateTimeIn30Minutes
}


export async function bcryptHash(password:string){

    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password,salt)
    return hashed
}


export async function  bcryptCompare({password,hashedPassword}:{password:string,hashedPassword:string}){
    const isValid =  await bcrypt.compare(password,hashedPassword)
    return isValid
}


export const getSession = async ()=>{
    const user = await getServerSession(authOptions)
    if(!user){
      return redirect("/user/signin")
    }
    const userData = user as unknown as ISessionInterface

    //redircect to verification if not verified
    if(!userData.isVerified){
      console.log("veify redirect")
        return redirect("/user/verify")
    }
    else return userData
}


export const getAuthenticatedUser = async()=>{
    const user = await getServerSession(authOptions)
    if(!user){
      return null
    }else{
       const userData = user as unknown as ISessionInterface 
       return userData
    }
}



export function generateMerchantID(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';

  while (id.length < 10) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const char = characters.charAt(randomIndex);

    if (!id.includes(char)) {
      id += char;
    }
  }

  return id;
}