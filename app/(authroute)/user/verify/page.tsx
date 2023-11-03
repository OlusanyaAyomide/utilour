'use client'
import { A_VerifyMail } from '@/actions/authActions'
import OtpInput from '@/components/utils/OtpInput'
import useServerData from '@/hooks/useServerData'
import React from 'react'

export default function Verify() {
    const {pending,getData} = useServerData(A_VerifyMail)
    return (
    <div className='full-shadow mb-24 bg-white px-2 py-8 min-h-[200px] sm:px-3 rounded-xl'>
        <OtpInput 
            header='A verification mail has been sent to'
            email='ayomideflex72@gmail.com'
            action={async (pin)=>{
                await getData({pin})
            }}
        />
    </div>
  )
}
