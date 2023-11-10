import Header from '@/components/layout/Header'
import SideLayout from '@/components/layout/SideLayout'
import React from 'react'


export default function PrivateLayout({children}:{children:React.ReactNode}) {

  return (
    <div className='pt-12 max-w-[1400px] mx-auto'>
        <Header/>
        <div className="flex  ">
            <div className="max-lg:hidden w-[240px] border-b relative">
                <div className="fixed left-[230px] top-[43px] max-lg:hidden h-[120px] w-[120px] radial"></div>
                <div className='fixed h-[calc(100vh-48px)] default-scroll xs:overflow-auto w-[240px]'>
                    <SideLayout/>
                </div>
            </div>
            <div className="grow bg-[#fcfdfd] min-h-[800px] h-full max-w-[100%] lg:max-w-[calc(100%-240px)]">
                {children}
            </div>
        </div>
    </div>
  )
}
