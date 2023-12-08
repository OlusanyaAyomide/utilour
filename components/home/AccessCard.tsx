'use client'
import React from 'react'
import { Icons } from '@/utils/Icons'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface IAccessCard{
    Icon:typeof Icons.close
    url?:string
    className?:string
    text:string
    ngClass:string
    onClick?:()=>void

}
export default function AccessCard({Icon,url,className,text,ngClass, onClick}:IAccessCard) {

  const AccessButton = () =>(
    <div onClick={onClick} className={cn("px-6 min-w-[160px] py-1 mr-3 sm:mr-5 cursor-pointer rounded-[32px] flex-center",className)}>
        <div className="h-10 w-10 grid place-items-center bg-white p-1 rounded-full">
            <Icon 
            className = {cn("text-xl",ngClass)}/>
        </div>
        <span className="font-medium ml-2 whitespace-nowrap">{text}</span>
    </div>
  )
  return (
    <>
        {onClick?<AccessButton/>:<Link href={url || ""}><AccessButton/></Link>}
    </>



  )
}
