'use client'
import React from 'react'
import Logo from '../utils/Logo'
import { sideBarMenu } from '@/utils/constants'
import { Button } from './button'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
export default function SideLayout() {
    const pathname = usePathname()
    return (
    <div className='mt-6'>
        <Logo className='lg:hidden mx-auto mb-6'/>
        {sideBarMenu.map((item,key)=>{
            const Icon =item.icon
            const isActive = pathname === item.url
        return(<Link href={item.url} key={key}>
            <button className={`w-full px-3 flex-center mb-3 py-3 h-10  ${isActive?"pl-6 text-white":"hover:bg-accent"}`}>
                <Icon className ={`text-2xl transition-all text-support duration-300 mr-2`}/>
                <span className='text-shade font-medium'>{item.text}</span>
           </button> 
        </Link>)
    })}
    </div>
  )
}
