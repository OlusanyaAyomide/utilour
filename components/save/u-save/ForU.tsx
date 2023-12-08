'use client'
import React, { useState } from 'react'
import useMounted from '@/hooks/useMounted' 
import { Input } from '@/components/ui/input'
import CurencyFlag from '@/components/utils/CurencyFlag'
import { cn } from '@/lib/utils'
import DayPicker from '@/components/utils/DayPicker'
import DurationPicker from '@/components/utils/DurationPicker'
import { Button } from '@/components/ui/button'
import PaymentTrigger from '@/components/utils/PaymentTrigger'


interface IAmountInput extends  React.InputHTMLAttributes<HTMLInputElement>{
    isNaira?:boolean
    showFlag?:boolean
    value:string
    onAmountChange:(content:string)=>void
}

function AmountInput({className,isNaira,showFlag=false,value,onAmountChange,...props}:IAmountInput) {
  return (
    <div className={cn("px-2 py-2 rounded-md mb-2 bg-[#F0F1F1] flex-center",className)}>
        {showFlag && <span className='text-base text-shade sm:text-xl font-medium mr-2'>
            {isNaira?"₦":"$"}
        </span>}
        <Input onChange={(e)=>{
            console.log("fired",e.target.value)
            onAmountChange(e.target.value)}} value={value} className='px-0 bg-transparent border-none sm:text-base' {...props}/>
        {showFlag && <CurencyFlag currency={isNaira?"NG":"US"}/>}
      </div>
  )
}

export default function ForU() {
    const isRendered = useMounted()
    const [monthly,setMonthly] = useState(50000)
    const [total,setTotal] = useState(300000)
    const [duration,setDuration] = useState(6)
   
    
    const validateNumber = (value:string)=>{
        const numberWithNoCommas = value.replace(/,/g, '');
        if(value === ""){return "0"}
        const numberRegex = /^-?\d+(\.\d+)?$/;
        const isNumber = numberRegex.test(numberWithNoCommas)

        if(isNumber){return numberWithNoCommas} 
    }

    return (
    <div className='mt-3 pb-20'>

        {isRendered &&  
        <>
            <h1 className="font-medium mb-1">How much are you saving in total</h1>
            <AmountInput onAmountChange={(value:string)=>{
                const isNumber = validateNumber(value)
                if(isNumber){
                    const total = Math.round(Number(isNumber))  
                    if(total >= 0){
                        setTotal(Math.round(total))
                        setMonthly(Math.round(total/duration))
                    }
                }
            }}
            pattern="[0-9]*" inputMode="numeric" isNaira showFlag value={total.toLocaleString()}/>

            <h1 className="font-medium mb-1">How much are you saving monthly</h1>
            <AmountInput onAmountChange={(value:string)=>{
                const isNumber = validateNumber(value)
                if(isNumber){
                    const monthly = Math.round(Number(isNumber))
                    if(monthly>=0){
                        setMonthly(Math.round(monthly))   
                        setTotal(Math.round(monthly * duration))
                    }  
                }
            }}

            pattern="[0-9]*" inputMode="numeric" isNaira showFlag value={monthly.toLocaleString()}/>

            <h1 className='font-medium mb-1'>What day of the month works best for you</h1>
            <DayPicker className='mb-2'/>
            
            <h1 className='font-medium mb-1'>How many monhts are you saving</h1>
            <DurationPicker duration={duration} setChange={(value)=>{
                setDuration(value)
                setMonthly(Math.round(total/value))
            }
            }/>
            
        </>
        }
        <PaymentTrigger title={`Complete savings : ₦${total.toLocaleString()}`}>
            <Button className='text-white bg-support flex w-full mt-8' size={"lg"}>Submit Request</Button>
        </PaymentTrigger>
  
    </div>
  )
}
