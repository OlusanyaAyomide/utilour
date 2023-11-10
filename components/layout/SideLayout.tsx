'use client'
import React from 'react'
import Logo from '../utils/Logo'
import { sideBarMenu } from '@/utils/constants'
import { Button } from '../ui/button'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

interface ISideLayout{
    closeSheet?:()=>void
}
export default function SideLayout({closeSheet}:ISideLayout) {
    const pathname = usePathname()
    return (
    <div className='xs:mt-2 sm:pt-14 pt-4'>
        <Logo className='lg:hidden xs:mb-5'/>
        {sideBarMenu.map((item,key)=>{
            const Icon =item.icon
            const isActive = pathname === item.url
        return(<Link href={item.url} key={key}>
            <button className={`w-full px-4 lg:px-6 flex-center mb-1 xs:mb-4  h-11  ${isActive?"pl-8 lg:pl-10 text-white":"hover:bg-accent"}`} onClick={closeSheet}>
                <Icon className ={`text-2xl transition-all text-support duration-300 mr-2`}/>
                <span className='text-shade font-medium'>{item.text}</span>
           </button> 
        </Link>)
    })}
    </div>
  )
}
