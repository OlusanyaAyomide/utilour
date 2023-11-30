
export interface ILogInForm{
    email:string
    password:string   
}

export interface ISignUpForm extends ILogInForm{
    firstName:string
    lastName:string
    confirmPassword:string
    referralId?:string
    isAgreed:boolean
}


export interface ISignIn{
    isGoogle?:boolean
    googleToken?:string
    type : "google" |"signIn" | "email"
    email?:string
    password?:string
    otp?:string
}


export interface ISessionInterface{
    email:string
    id:string
    firstName:string
    lastName:string
    isVerified:boolean
}