'use client'
import React, { useState } from 'react'
import Logo from '../utils/Logo'
import { Sheet, SheetContent, SheetTrigger,SheetOverlay, SheetClose } from '../ui/sheet'
import { Icons } from '@/utils/Icons'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import SideLayout from './SideLayout'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import Link from 'next/link'

export default function Header() {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const [popUpOpen,setPopOpen] = useState<boolean>(false)
    return (
    <div className='w-full fixed  z-40 flex-center justify-between top-0 left-0 py-2  bg-page paddingx'>
        <div>
            <Logo className='max-lg:hidden'/>
            <Sheet open={isOpen} onOpenChange={(val)=>{setIsOpen(val)}}>
                <SheetTrigger asChild className='cursor-pointer' onClick={()=>{setIsOpen(true)}}>
                    <span className='lg:hidden '><Icons.navmenu className ="text-shade text-2xl cursor-pointer"/></span>
                    {/* <SheetClose className='hidden'></SheetClose> */}
                </SheetTrigger>
                <SheetOverlay className='lg:hidden'></SheetOverlay>
                <SheetContent onInteractOutside={()=>{
                    setIsOpen(false)
                }} className='px-2 sm:max-w-[320px] max-xs:py-0 lg:hidden outline-none' side="left">
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
                <Popover open={popUpOpen}>
                    <PopoverTrigger asChild onClick={()=>{(setPopOpen(true))}}>
                        <div className='flex-center'>
                            <Avatar className='h-7 w-7 cursor-pointer'>
                                <AvatarFallback>UL</AvatarFallback>
                                <AvatarImage src="/avatar.png"/>
                            </Avatar>
                            <button className='cursor-pointer'>
                                <Icons.goTriangle className ="relative top-[2px] text-2xl text-shade"/>
                            </button>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent  onBlur={()=>{setPopOpen(false)}} onFocusOutside={()=>{setPopOpen(false)}} className='relative max-w-[150px] right-10 py-2 px-0'>
                        <Link onClick={()=>{setPopOpen(false)}} href={"/account"}>
                            <div className="mb-2 py-2 flex-center px-2 hover:bg-accent">
                                <Icons.profile className = "text-shade text-3xl"/>
                                <h1 className="ml-2 text-shade">Profile</h1>
                            </div>
                        </Link>

                        <div className='py-2 flex-center px-2 hover:bg-accent'>
                            <Icons.logout className = "text-shade text-3xl"/>
                            <h1 className="ml-2 text-shade">Logout</h1>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>

    </div>
  )
}
