import { cn } from '@/lib/utils'
import React from 'react'
import { Input } from '../ui/input'
import CurencyFlag from './CurencyFlag'

interface IAmountInput extends  React.InputHTMLAttributes<HTMLInputElement>{
    isNaira?:boolean
    showFlag?:boolean
}
export default function AmountInput({className,isNaira,showFlag=false,...props}:IAmountInput) {
  return (
    <div className={cn("px-2 py-2 rounded-md mb-2 bg-[#F0F1F1] flex-center",className)}>
        {showFlag && <span className='text-base text-shade sm:text-xl font-medium mr-2'>
            {isNaira?"₦":"$"}
        </span>}
        <Input className='px-0 bg-transparent border-none sm:text-base' {...props}/>
        {showFlag && <CurencyFlag currency={isNaira?"NG":"US"}/>}
    </div>
  )
}
