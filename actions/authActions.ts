'use server'
import * as yup from "yup"
import { ILogInForm, ISignUpForm } from "@/interfaces/client-interface";
import { logInSchema,signUpSchema } from "@/utils/validations";
import catchAsync from "@/utils/catchAsync";

// const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
// const passwordRegex =/^(?=.*[A-Z])(?=.*[a-zA-Z0-9!@#$%^&*]).{8,}$/
// const signUpSchema:yup.ObjectSchema<any> = yup.object({
//     firstName:yup.string().required().min(4),
//     lastName:yup.string().required().min(4),
//     email:yup.string().required().matches(emailRegex,"email is not valid"),
//     password:yup.string().required().matches(passwordRegex,"password is not strong enough"),
//     referralId:yup.string().required(),
//     confirmPassword:yup.string().required().oneOf([yup.ref("password")],'Password mismatch'),
//     isAgreed:yup.boolean().required().oneOf([true],'Accept terms and conditions')

// })

export const A_SignUpUser = catchAsync(async (data:ISignUpForm)=>{
    const isvalid = await signUpSchema.validate(data)   
    console.log(isvalid,"abc")
    return {message:"successful"}
})

export const A_SignInUser = catchAsync(async (data:ILogInForm)=>{
       console.log(data)
       const validatedData = await logInSchema.validate(data)
        return {message:"sucess"}
})


export const A_VerifyMail= catchAsync(async(data:{pin:string})=>{
    console.log(data)
    return {message:"Pin success"}
})