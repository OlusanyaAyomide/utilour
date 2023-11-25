import React from 'react'
import { Icons } from '@/utils/Icons'
interface ISaveProducts{
    header:string
    Icon:typeof Icons.close
    children:React.ReactNode
    description:string
}   

export default function SaveProducts({header,Icon,children,description}:ISaveProducts) {
  return (
    <div className='max-h-screen overflow-auto px-2 sm:px-3 default-scroll'>
        <h1 className="font-semibold text-lg sm:text-xl mt-2 hover:text-support">{header}</h1>
        <div className="mt-6 mx-auto bg-gray-100 rounded-full h-28 grid place-content-center w-28">
            <Icon className = "text-[80px] text-support "/>
        </div>
        <h1 className="text-center text-base mt-4">{description}</h1>
        <div className="mt-4">
            {children}
        </div>
    </div>
  )
}
