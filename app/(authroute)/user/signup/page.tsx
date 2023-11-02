'use client'
import InputField from '@/components/landing/auth/InputField'
import React, { useState, useTransition } from 'react'
import { useForm, SubmitHandler,UseFormRegister } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signUpSchema } from '@/utils/validations'
import { ISignUpForm } from '@/interfaces/client-interface'
import { Icons } from '@/utils/Icons'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { A_SignUpUser } from '@/actions/authActions'

export default function SignUp() {


  const {register,handleSubmit,watch,formState:{errors},setValue} = useForm<ISignUpForm>({
    resolver:yupResolver(signUpSchema),defaultValues:{isAgreed:false}
    })

    const [isHidden,setIsHidden] = useState<boolean>(true)
    const [confirmHidden,setConfirmHidden] = useState<boolean>(true)

    const [pending,startTransition] = useTransition()
    
    const onSubmit:SubmitHandler<ISignUpForm>=(data)=>{
        startTransition(()=>{A_SignUpUser(data)})
        console.log(data)
    }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
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
        <Button className='h-12 w-full flex items-center text-white bg-main mt-4'>
            Create Account
        </Button>
    </form>
  )
}
