import { cn } from '@/lib/utils'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { ISignUpForm } from '@/interfaces/client-interface'

type ISignUpField = 'firstName'|'lastName'|'email'|'password'|'confirmPassword' | 'referralId'

interface IInputField{
    name:ISignUpField
    error?:string
    className?:string
    children?:React.ReactNode
    placeholder:string
    label:string
    type?:"email" | "password" | "text"
    register:UseFormRegister<ISignUpForm>

}
export default function InputField({className,error,children,name,placeholder,label,type = "text",register}:IInputField) {
  return (
    <div className={cn("relative mb-2 pb-2",className)}>
         <span className="block text-main font-medium mb-2 ml-1">{label}</span>
        <input {...register(name)} defaultValue='' type={type} name={name} className=' rounded-lg text-foreground  h-12 bg-[#f1f2f993] focus-visible:border px-2 outline-none w-full block' placeholder={placeholder}  />
        {children && children}
        {error && <span className='absolute -bottom-2 text-[12px] text-red-500 left-2'>{error}</span>}
    </div>
  )
}
