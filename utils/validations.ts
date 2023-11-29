import * as yup from "yup"
import { ILogInForm, ISignIn, ISignUpForm } from "@/interfaces/interface"

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
    type:yup.string().required().oneOf(["google","signIn","email"]),
    isGoogle:yup.boolean().optional(),
    password:yup.string().optional(),
    otp:yup.string().optional(),
    googleToken:yup.string().optional()
})