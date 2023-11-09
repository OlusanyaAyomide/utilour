import React from 'react'
import { Icons } from '@/utils/Icons'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface IAccessCard{
    Icon:typeof Icons.close
    url:string
    className?:string
    text:string
    ngClass:string

}
export default function AccessCard({Icon,url,className,text,ngClass}:IAccessCard) {
  return (
    <Link href={url}>
        <div className={cn("px-6 py-1 mr-5 cursor-pointer rounded-[32px] flex-center",className)}>
            <div className="h-10 w-10 grid place-items-center bg-white p-1 rounded-full">
                <Icon 
                className = {cn("text-xl",ngClass)}/>
            </div>
            <span className="font-medium ml-2 whitespace-nowrap">{text}</span>
        </div>
    </Link>

  )
}
