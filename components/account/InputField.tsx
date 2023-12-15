import { cn } from '@/lib/utils'
import React from 'react'
import { Input } from '../ui/input'
import "./picker.css"


interface IInputField{
    className?:string
    title:string
    disabled?:boolean
    placeholder?:string
    type?:"email" | "text"

}

export default function InputField({className,type="text",title,disabled=false,placeholder}:IInputField) {
  return (
    <div className={cn("mb-6 w-full",className)}>
        <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">{title}</h1>
        <Input  type={type} disabled={disabled} placeholder={placeholder} className='focus-visible:border focus-visible:ring-0 h-12'/>
    </div>
  )
}
