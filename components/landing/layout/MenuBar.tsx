'use client'
import React, { useRef, useState } from 'react'
import { Sheet,SheetTrigger,SheetClose, SheetContent } from '@/components/ui/sheet'
import { useHomeLayout } from '@/store/useHomeLayout'
import NavSection from './NavSection'
export default function MenuBar() {
    const {setIsTriggered,isTriggered,isScrolled} = useHomeLayout()
    return (
    <>
        <button onClick={()=>{setIsTriggered(!isTriggered)}} className='flex relative z-50 flex-col shrink-0 w-[25px] h-5 justify-between max-md:hiddden ml-1 md:hidden'>
            <span className={`menu-bar ${isTriggered?"rotate-45 h-[3px] -translate-y-[0.7px] origin-left":""}`}></span>
            <span className={`menu-bar w-[75%] ml-auto ${isTriggered?"opacity-0 -translate-x-10":""}`}></span>
            <span className={`menu-bar ${isTriggered?"-rotate-45 h-[3px] origin-left translate-y-[0.7px]":""}`}></span>
        </button>
        {
        isTriggered && <div className={`fixed lg:hidden  ${isScrolled?"bg-white":"bg-page"} inset-0 z-30`}>
            <NavSection/>
        </div>
        }
    </>

  )
}
