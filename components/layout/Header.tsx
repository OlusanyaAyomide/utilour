'use client'
import React, { useState } from 'react'
import Logo from '../utils/Logo'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Icons } from '@/utils/Icons'
import { Avatar, AvatarFallback } from '../ui/avatar'
import SideLayout from './SideLayout'

export default function Header() {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    return (
    <div className='w-full fixed flex-center justify-between top-0 left-0 py-1 bg-page paddingx'>
        <div>
            <Logo className='max-lg:hidden'/>
            <Sheet open={isOpen}>
                <SheetTrigger asChild className='cursor-pointer' onClick={()=>{setIsOpen(true)}}>
                    <span className='lg:hidden '><Icons.navmenu className ="text-shade text-2xl cursor-pointer"/></span>
                    
                </SheetTrigger>
                <SheetContent onInteractOutside={()=>{
                    setIsOpen(false)
                }} className='px-2 sm:max-w-[320px] max-xs:py-0 lg:hidden' side="left">
                    <SideLayout closeSheet={()=>setIsOpen(false)}/>
                </SheetContent>
            </Sheet>
        </div>
        <span className='text-[13px]'>Dashboard</span>
        <div className='flex-center'>
            <button>
                <Icons.notification className = "text-2xl text-shade"/>
            </button>
            <div className="flex-center mr-[2px] ml-2">
                <Avatar>
                    <AvatarFallback>UL</AvatarFallback>
                </Avatar>
                <button>
                    <Icons.goTriangle className ="relative top-[2px] text-2xl text-shade"/>
                </button>
            </div>
        </div>

    </div>
  )
}
