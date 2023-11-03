'use client'

import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { logInSchema } from '@/utils/validations'
import { ILogInForm} from '@/interfaces/client-interface'
import { Icons } from '@/utils/Icons'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { A_SignInUser, A_SignUpUser } from '@/actions/authActions'
import LogInField from '@/components/landing/auth/LogInField'
import useServerData from '@/hooks/useServerData'

export default function SignIn() {


  const {register,handleSubmit,watch,formState:{errors}} = useForm<ILogInForm>({
    resolver:yupResolver(logInSchema)
    })

    const [isHidden,setIsHidden] = useState<boolean>(true)

    const {pending,getData} = useServerData(A_SignInUser)
    console.log(pending)

    const onSubmit:SubmitHandler<ILogInForm>= async (data)=>{
      const result = await getData<{message:string}>(data)
      console.log(result)
    }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="full-shadow mb-10 bg-white px-2 py-8 min-h-[200px] sm:px-3 rounded-xl" >
        <h1 className="font-bold text-main mb-6 text-center text-xl">Welcome Back</h1>

        <LogInField
            name='email'
            placeholder='utilor@gmail.com'
            label='Email'
            type='email'
            register={register} 
            error={errors.email?.message}
        />

        <LogInField
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
        </LogInField>

        <Button className='h-12 w-full mt-8 flex items-center text-white bg-main'>
            Sign In
        </Button>
        <Link href={"/user/signup"}>
            <h1 className="mt-2 mb-6 text-main hover:underline text-xs text-center">
                <span>No accounts yet? Sign up</span> 
             </h1>
        </Link>

    </form>
  )
}
