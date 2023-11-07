import Header from '@/components/layout/Header'
import SideLayout from '@/components/ui/SideLayout'
import React from 'react'

export default function PrivateLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='pt-12'>
        <Header/>
        <div className="flex  ">
            <div className="max-lg:hidden w-[240px] border-b">
                <div className='fixed h-[calc(100vh-48px)] overflow-auto w-[240px]'>
                    <div className="absolute right-8 -top-4 h-[200px] w-[200px] radial"></div>
                    <SideLayout/>
                </div>
            </div>
            <div className="grow bg-white min-h-[800px] h-full">
                {children}
            </div>
        </div>
    </div>
  )
}
