import { cn } from '@/lib/utils'
import React from 'react'
import { Input } from '../ui/input'
import "./picker.css"
import { UseFormRegister } from 'react-hook-form'

interface IInputField extends React.InputHTMLAttributes<HTMLInputElement> {
    title:string
    error?:string
    register?:UseFormRegister<any>

}

export default function InputField({className,type="text",name="null",title,disabled=false,placeholder,error,register,...rest}:IInputField) {
    return (
    <div className={cn("mb-6 w-full relative",className)}>
        <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">{title}</h1>

        {/* condtionally register register input form if register is passed in */}
        {register?<Input {...register(name)} {...rest} type={type} disabled={disabled} placeholder={placeholder} className='focus-visible:border focus-visible:ring-0 h-12'/>
        :
        <Input {...rest} type={type} disabled={disabled} placeholder={placeholder} className='focus-visible:border focus-visible:ring-0 h-12'/>
        }
        {error && <span className="text-red-500 absolute -bottom-2 left-2 text-[13px]">{error}</span>}
    </div>
  )
}
