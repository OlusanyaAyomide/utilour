
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
    type : "google" |"signIn" | "email" | "googlesignIn"
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
    merchantID:string
}

export interface IgoogleResponse {
    family_name: string
    given_name: string
    picture:string
    email:string,
    id: string
}


export interface ICompleteProfile{
    middleName:string
    gender:string
    country:string
    dateOfBirth:Date
    phoneNumber:string
    countryCode:string
}



export interface INextOfKin{
    firstName:string
    lastName:string
    email:string
    relationship:string
    address:string
    countryCode:string
    phoneNumber:string
}


export interface IIDentitiyForm{
    identificationType:string
    identificationNumber:string
    confirmIdentityNumber:string
}

export interface IBvnn{
    BvnNumber:string
}

export interface INewBank{
    bankName:string
    AccountNumber:string
}