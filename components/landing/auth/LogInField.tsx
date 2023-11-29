import { cn } from '@/lib/utils'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { ILogInForm, ISignUpForm } from '@/interfaces/interface'

type ILogInField = 'email'|'password'

interface IInputField{
    name:ILogInField
    error?:string
    className?:string
    children?:React.ReactNode
    placeholder:string
    label:string
    type?:"email" | "password" | "text"
    register:UseFormRegister<ILogInForm>

}
export default function LogInField({className,error,children,name,placeholder,label,type = "text",register}:IInputField) {
  return (
    <div className={cn("relative mb-3 pb-2",className)}>
         <span className="block text-main font-medium mb-1 ml-1">{label}</span>
        <input {...register(name)} defaultValue='' type={type} name={name} className=' rounded-lg text-foreground  h-12 bg-[#f1f2f993] focus-visible:border px-2 outline-none w-full block' placeholder={placeholder}  />
        {children && children}
        {error && <span className='absolute -bottom-2 text-[12px] text-red-500 left-2'>{error}</span>}
    </div>
  )
}
