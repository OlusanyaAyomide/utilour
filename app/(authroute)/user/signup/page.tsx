'use client'
import InputField from '@/components/landing/auth/InputField'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signUpSchema } from '@/utils/validations'
import { ISignUpForm } from '@/interfaces/client-interface'
import { Icons } from '@/utils/Icons'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { A_SignUpUser } from '@/actions/authActions'
import useServerData from '@/hooks/useServerData'

export default function SignUp() {


  const {register,handleSubmit,watch,formState:{errors},setValue} = useForm<ISignUpForm>({
    resolver:yupResolver(signUpSchema),defaultValues:{isAgreed:false}
    })

    const [isHidden,setIsHidden] = useState<boolean>(true)
    const [confirmHidden,setConfirmHidden] = useState<boolean>(true)

  
    const {pending,getData} = useServerData(A_SignUpUser)
    console.log(pending)

    const onSubmit:SubmitHandler<ISignUpForm>= async (data)=>{
        const result = await getData<{message:string}>(data)
        console.log(result)
      }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='full-shadow mb-10 bg-white px-2 py-8 min-h-[200px] sm:px-3 rounded-xl'>
        <h1 className="font-bold text-main mb-6 text-center text-xl">Create An Account</h1>

        <InputField
            name='firstName'
            placeholder='firstname'
            label='First Name'
            register={register}
            error={errors.firstName?.message}
        />

        <InputField
            name='lastName'
            placeholder='lastname'
            label='Last Name'
            register={register}
            error={errors.lastName?.message}
        />

        <InputField
            name='email'
            placeholder='utilor@gmail.com'
            label='Email'
            type='email'
            register={register} 
            error={errors.email?.message}
        />

        <InputField
            name='referralId'
            placeholder='Optional'
            label='ReferalId'
            register={register} 
            error={errors.referralId?.message}
        />

        <InputField
            name='password'
            placeholder='Enter password'
            label='Password'
            register={register} 
            error={errors.password?.message}
            type={isHidden?"password":"text"}
        >
        <button type="button" onClick={()=>{setIsHidden((prev=>!prev))}}    className='absolute top-[40px]  right-2 text-shade text-xl'>
                {isHidden?<Icons.seeeye/>:<Icons.dasheye/>}
              </button>
        </InputField>

        <InputField
            name="confirmPassword"
            placeholder='Confirm Password'
            label='Confirm Password'
            register={register} 
            type={confirmHidden?"password":"text"}
            error={errors.confirmPassword?.message}
        >
            <button type="button" onClick={()=>{setConfirmHidden((prev=>!prev))}}    className='absolute top-[40px]  right-2 text-shade text-xl'>
                {confirmHidden?<Icons.seeeye/>:<Icons.dasheye/>}
            </button>
        </InputField>

        <div className="mt-5 flex relative pb-2">
            <Checkbox {...register("isAgreed")}   name = 'isAgreed'  onCheckedChange={(data)=>{
                setValue('isAgreed',data as any)
            }} />
            <Link href={"/"} className='ml-2 text-[13px] hover:underline decoration-main hover:text-main'>
                <span>By Ticking the box,you agree to utilor terms and policy.</span>
            </Link>
            <span className='absolute -bottom-2 text-[12px] text-red-500 left-2'>{errors.isAgreed?.message}</span>
        </div>

        <Button className='h-12 w-full flex items-center text-white  mt-8'>
            Create Account
        </Button>

        <Button variant={"outline"} className='h-12 text-foreground flex bg-gray-100 hover:bg-gray-200 w-full  items-center mt-4'>
           <Icons.google className = "text-2xl"/>
           <span className='ml-2'>Sign Up With Google </span>
        </Button>

        <Link href={"/user/signin"}>
            <h1 className="mt-2 mb-3 text-main hover:underline text-[13px] text-center">
                <span>sign in instead</span>   
             </h1>
        </Link>
    </form>
  )
}
