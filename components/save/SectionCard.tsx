import { cn } from '@/lib/utils'
import React from 'react'
import { Icons } from '@/utils/Icons'
interface ISectionCard{
    className?:string
    showGradient?:boolean
    Icon:typeof Icons.bank
    content:string
    title:string
}
export default function SectionCard({className,showGradient=false,Icon,content,title}:ISectionCard) {
  return (
    <div className={cn(`rounded-xl full-shadow pt-4 pb-8 pad ${showGradient?"relative before:absolute before:inset-14 before:z-20 before before:bg-support before: before:blur-2xl before:opacity-60 bg-gradient-to-b from-white to-white/90":"bg-white"}  `,className)}>
        <div className='relative z-30'>
            <div className="mb-[2px] rounded-xl grid place-items-center h-14 w-14 bg-main">
            <span><Icon className ="text-4xl text-white"/></span>
        </div>
        <h1 className="text-base font-semibold mb-3">{title}</h1>
        <h1 className="text-shade mt-1">{content}</h1>
        </div>

    </div>
  )
}
