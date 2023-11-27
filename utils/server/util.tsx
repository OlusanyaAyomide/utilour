import bcrypt from "bcrypt";

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
    const sortRounds = 10
    const hashed = await bcrypt.hash(password,10)
    return hashed
}


export async function  bcryptCompare({password,hashedPassword}:{password:string,hashedPassword:string}){
    const isValid =   await bcrypt.compare(password,hashedPassword)
    return isValid
}