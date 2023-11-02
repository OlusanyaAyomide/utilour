import Logo from '@/components/utils/Logo'
import React from 'react'

export default function AuthLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='grid animate-movebg bg-dots bg-[length:100px_100px] overflow-x-hidden h-screen place-items-center relative'>
        <div className="rounded-full h-28 w-28 sm:h-44 sm:w-44 absolute  bg-support -top-10 -right-10"></div>
        <div className="mx-auto max-w-[500px] mb-10 w-full">
            <Logo className='mx-auto mb-3 mt-3'/>
            <div className="full-shadow relative z-30 mb-10 bg-white px-2 py-8 min-h-[300px] sm:px-3 rounded-xl">
                {children}            
            </div>
        </div>

    </div>
  )
}
