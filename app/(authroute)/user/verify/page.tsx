import VerifyMail from '@/components/landing/auth/VerifyMail'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/server/authOptions'
import { ISessionInterface } from '@/interfaces/interface'
import { redirect } from 'next/navigation'

export default async function Verify() {
    const  session = await getServerSession(authOptions) as unknown as ISessionInterface
    if(session?.isVerified){
        return redirect("/home")
    }

    return (<VerifyMail/>)
}
