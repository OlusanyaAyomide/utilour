'use client'
import InputField from '@/components/landing/auth/InputField'
import React, {  useState, useTransition } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signUpSchema } from '@/utils/validations'
import { ISignUpForm } from '@/interfaces/interface'
import { Icons } from '@/utils/Icons'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useMutateData } from '@/hooks/useMutateData'
import { useRouter } from 'next/navigation'
import RingSpinner from '@/components/utils/spinners/RingSpinner'
import { useEmailVerification } from '@/store/useEmailverifcation'
import { useGoogleLogin } from '@react-oauth/google'
import { signIn } from 'next-auth/react'
import { useCustomToast } from '@/components/utils/useCustomToast'

export default function SignUp() {
    const router = useRouter()
    const {setStatus} = useEmailVerification()
    const [pending,startTransition] = useTransition()
    const toaster = useCustomToast()

  const {register,handleSubmit,watch,formState:{errors},setValue} = useForm<ISignUpForm>({
    resolver:yupResolver(signUpSchema),defaultValues:{isAgreed:false}
    })

    const [isHidden,setIsHidden] = useState<boolean>(true)
    const [confirmHidden,setConfirmHidden] = useState<boolean>(true)
    const {isPending,mutate} = useMutateData({url:"/api/user/signup",onSuccess:(data)=>{
        console.log(data,"from signUp")
        setStatus(data?.email)
        router.push("/user/verify")
    }})

    //custom user google login to get user token
    const login = useGoogleLogin({
        //send user token to the server for authentication
        onSuccess: (res) =>{
            startTransition(async ()=>{
                const {error,ok} = await signIn("credentials",{redirect:false,type:"google",googleToken:res.access_token}) as unknown as {status:number,ok:boolean,error:string | null}
                if(!ok && error){
                    toaster("bad",error)
                }
                else{
                  toaster("good",`Welcome Aboard`)
                  router.push("/home")
                }
            })
        } ,
        onError: (error) => console.log('Login Failed:', error)
    });

    const onSubmit:SubmitHandler<ISignUpForm>= async (data)=>{
        mutate(data)
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

        <Button disabled={isPending || pending} className='h-12 w-full flex items-center text-white  mt-8'>
            {!(isPending || pending)?"Create Account":<RingSpinner/>}
        </Button>

        <Button type='button' onClick={()=>{login()}} disabled={isPending || pending} variant={"outline"} className='h-12 text-foreground flex bg-gray-100 hover:bg-gray-200 w-full  items-center mt-4'>
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
