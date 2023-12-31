import AutoLogOut from '@/components/layout/AutoLogOut'
import Header from '@/components/layout/Header'
import SideLayout from '@/components/layout/SideLayout'
import Back from '@/components/utils/Back'
import React from 'react'
import { ISessionInterface } from '@/interfaces/interface'
import { redirect } from 'next/navigation'

import { getSession } from '@/utils/server/util'
import NetworkTracker from '@/components/layout/NetoworkTracker'

export default async function PrivateLayout({children}:{children:React.ReactNode}) {
 
    await getSession()

    return (
    <div className='pt-12 max-w-[1400px] mx-auto'>
        <Header/>
        <div className="flex">
            <div className="max-lg:hidden w-[240px] border-b relative">
                <div className="fixed z-40 left-[230px] top-[43px] max-lg:hidden h-[120px] w-[120px] radial"></div>
                <div className='fixed h-[calc(100vh-48px)] default-scroll xs:overflow-auto w-[240px]'>
                    <SideLayout/>
                </div>
            </div>
            <div className="grow bg-[#fcfdfd] min-h-screen max-lg:pt-2 h-full max-w-[100%] lg:max-w-[calc(100%-240px)]">
                <Back/>
                {children}
            </div>
        </div>
        <NetworkTracker/>
        {process.env.MODE === "PROD" &&  <AutoLogOut/>}
    </div>
  )
}
