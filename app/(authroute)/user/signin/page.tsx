'use client'

import React, { useState,useTransition } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { logInSchema } from '@/utils/validations'
import { ILogInForm} from '@/interfaces/interface'
import { Icons } from '@/utils/Icons'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import LogInField from '@/components/landing/auth/LogInField'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useCustomToast } from '@/components/utils/useCustomToast'
import RingSpinner from '@/components/utils/spinners/RingSpinner'
import { useEmailVerification } from '@/store/useEmailverifcation'

export default function SignIn() {


  const {register,handleSubmit,watch,formState:{errors}} = useForm<ILogInForm>({
    resolver:yupResolver(logInSchema)
    })
    const [pending,startTransition] = useTransition()
    const [isHidden,setIsHidden] = useState<boolean>(true)
    const router = useRouter()
    const toaster = useCustomToast()
    const {setStatus} = useEmailVerification()

    const onSubmit:SubmitHandler<ILogInForm>= async (data)=>{
        startTransition(async ()=>{
          const {error,ok} = await signIn("credentials",{redirect:false,type:"signIn",password:data.password,email:data.email}) as unknown as {status:number,ok:boolean,error:string | null}
          //show error message
          if(!ok && error){
            toaster("bad",error)
          }
          else{
            toaster("good",`Welcome back`)
            setStatus(data.email)
            router.push("/home")
          }

        })
      // const result = await mutateData<{message:string}>(data)
      // console.log(result)
    }
    console.log(pending)
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

        <Button disabled={pending}  className='h-12 w-full mt-8 flex items-center text-white bg-main'>
            {!pending?"Sign In":<RingSpinner/>}
        </Button>
        <Link href={"/user/signup"}>
            <h1 className="mt-2 mb-6 text-main hover:underline text-xs text-center">
                <span>No accounts yet? Sign up</span> 
             </h1>
        </Link>

    </form>
  )
}
