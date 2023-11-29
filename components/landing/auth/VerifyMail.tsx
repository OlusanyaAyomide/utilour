'use client'
// import { A_VerifyMail } from '@/actions/authActions'
import OtpInput from '@/components/utils/OtpInput'
import useServerData from '@/hooks/useServerData'
import React, { useTransition } from 'react'
import { signIn,signOut } from "next-auth/react"
import { useCustomToast } from '@/components/utils/useCustomToast'
import { useRouter } from 'next/navigation'
import { Rings } from 'react-loader-spinner'


export default function VerifyMail() {
    const [pending,startTransiton] = useTransition()
    console.log(pending)
    const toaster = useCustomToast()
    const router = useRouter()
    return (
    <div className='full-shadow mb-24 relative bg-white px-2 py-8 min-h-[200px] sm:px-3 rounded-xl'>
        <OtpInput   
            header='A verification mail has been sent to'
            email='ayomideflex72@gmail.com'
            action={async (pin)=>{
                startTransiton(async ()=>{
                    const {error,ok} = await signIn("credentials",{redirect:false,type:"email",otp:pin}) as unknown as {status:number,ok:boolean,error:string | null}
                    if(error && !ok){
                        toaster("bad",error)
                    }
                    else{
                        console.log("success")
                        router.push("/home")
                        }
                    })
                }}
        />
        {pending && <div className='absolute bg-black/10 inset-0 grid place-items-center z-30'>
                <Rings
                    height="120"
                    width="120"
                    color="#fff"
                    radius="6"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="rings-loading"
                />
        </div>}
        {/* <button className='px-3 py-1 border' onClick={()=>{signOut()}}>Sign Out</button> */}
    </div>
  )
}
