import * as yup from "yup"
import { IBvnn, ICompleteProfile, IIDentitiyForm, ILogInForm, INextOfKin, ISignIn, ISignUpForm } from "@/interfaces/interface"

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const passwordRegex =/^(?=.*[A-Z])(?=.*[a-zA-Z0-9!@#$%^&*]).{8,}$/
export const signUpSchema:yup.ObjectSchema<ISignUpForm> = yup.object({
    firstName:yup.string().required().min(4),
    lastName:yup.string().required().min(4),
    email:yup.string().required().matches(emailRegex,"email is not valid"),
    password:yup.string().required().matches(passwordRegex,"password is not strong enough"),
    referralId:yup.string().optional(),
    confirmPassword:yup.string().required().oneOf([yup.ref("password")],'Password mismatch'),
    isAgreed:yup.boolean().required().oneOf([true],'Accept terms and conditions')

})



export const logInSchema:yup.ObjectSchema<ILogInForm> = yup.object({
    email:yup.string().required().matches(emailRegex,"email is not valid"),
    password:yup.string().required().matches(passwordRegex,"password is not strong enough"),
})


export const SignInSchema:yup.ObjectSchema<any>=yup.object({
    email:yup.string().optional(),
    type:yup.string().required().oneOf(["google","signIn","email","googlesignIn"]),
    isGoogle:yup.boolean().optional(),
    password:yup.string().optional(),
    otp:yup.string().optional(),
    googleToken:yup.string().optional()
})


export const profileSchema:yup.ObjectSchema<ICompleteProfile>= yup.object({
    middleName:yup.string().required(),
    gender:yup.string().required(),
    country:yup.string().required(),
    dateOfBirth:yup.date().required(),
    phoneNumber: yup.string().matches(/^[0-9]*$/, 'Phone number must contain only digits').max(10).required(),
    countryCode:yup.string().required()
})




export const nextOfKinSchema:yup.ObjectSchema<INextOfKin>=yup.object({
    firstName:yup.string().required(),
    lastName:yup.string().required(),
    email:yup.string().required(),
    relationship:yup.string().required(),
    phoneNumber: yup.string().matches(/^[0-9]*$/, 'Phone number must contain only digits').length(10).required(),
    countryCode:yup.string().required(),
    address:yup.string().required(),
})


export const IdentificationSchema:yup.ObjectSchema<IIDentitiyForm>= yup.object({
    identificationType:yup.string().required(),
    identificationNumber:yup.string().required(),
    confirmIdentityNumber:yup.string().required().oneOf([yup.ref("identificationNumber")],'Identificatioin Number mismatch'),
})


export const IBvnSchema:yup.ObjectSchema<IBvnn> = yup.object({
    BvnNumber:yup.string().required().length(11,"Bvn is Invalid")
})