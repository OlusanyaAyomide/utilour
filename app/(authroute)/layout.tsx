import Logo from '@/components/utils/Logo'
import React from 'react'
import { redirect } from 'next/navigation'
import {getServerSession} from "next-auth"
import { authOptions } from '../api/auth/[...nextauth]/route'
import { ISessionInterface } from '@/interfaces/interface'


export default async function AuthLayout({children}:{children:React.ReactNode}) {
  const  session = await getServerSession(authOptions) as unknown as ISessionInterface
    if(session && session.isVerified){
      return redirect("/home")
    }
  
  return (
    <div className='grid animate-movebg bg-dots bg-[length:100px_100px] overflow-x-hidden h-screen place-items-center relative'>
        <div className="rounded-full h-28 w-28 sm:h-44 sm:w-44 absolute  bg-support -top-10 -right-10"></div>
        <div className="mx-auto max-w-[500px] mb-4 w-full">
            <Logo className='mx-auto mb-3 mt-3'/>
            <div className="relative z-30">
                {children}            
            </div>
        </div>

    </div>
  )
}
