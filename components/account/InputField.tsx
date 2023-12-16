import { cn } from '@/lib/utils'
import React from 'react'
import { Input } from '../ui/input'
import "./picker.css"


interface IInputField extends React.InputHTMLAttributes<HTMLInputElement> {
    title:string

}

export default function InputField({className,type="text",title,disabled=false,placeholder,...rest}:IInputField) {
  return (
    <div className={cn("mb-6 w-full",className)}>
        <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">{title}</h1>
        <Input {...rest} type={type} disabled={disabled} placeholder={placeholder} className='focus-visible:border focus-visible:ring-0 h-12'/>
    </div>
  )
}
