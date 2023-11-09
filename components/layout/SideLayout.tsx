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
    <div className='xs:mt-2'>
        <Logo className='lg:hidden mb-6 hidden xs:block'/>
        {sideBarMenu.map((item,key)=>{
            const Icon =item.icon
            const isActive = pathname === item.url
        return(<Link href={item.url} key={key}>
            <button className={`w-full px-4 lg:px-6 flex-center mb-[1px] xs:mb-[10px]  h-10  ${isActive?"pl-8 lg:pl-10 text-white":"hover:bg-accent"}`} onClick={closeSheet}>
                <Icon className ={`text-2xl transition-all text-support duration-300 mr-2`}/>
                <span className='text-shade font-medium'>{item.text}</span>
           </button> 
        </Link>)
    })}
    </div>
  )
}
