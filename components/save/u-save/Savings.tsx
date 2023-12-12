'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import DayPicker from '@/components/utils/DayPicker'
import DurationPicker from '@/components/utils/DurationPicker'
import { Button } from '@/components/ui/button'
import PaymentTrigger from '@/components/utils/PaymentTrigger'
import AmountInput from './AmountInput'

interface IForU{
    showPartner?:boolean
    type :"usave" | "ubugga"
    startAmount:number
}


export default function Savings({showPartner,type,startAmount}:IForU) {
    const SAVINGDURATION = 6
    const [monthly,setMonthly] = useState(startAmount)
    const [total,setTotal] = useState(startAmount * SAVINGDURATION)
    const [duration,setDuration] = useState(SAVINGDURATION)
   
    
    const validateNumber = (value:string)=>{
        const numberWithNoCommas = value.replace(/,/g, '');
        if(value === ""){return "0"}
        const numberRegex = /^-?\d+(\.\d+)?$/;
        const isNumber = numberRegex.test(numberWithNoCommas)

        if(isNumber){return numberWithNoCommas} 
    }

    return (
    <div className='mt-3 pb-20'>

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
        pattern="[0-9]*" inputMode="numeric" isNaira={type==="usave"?true:false}   showFlag value={total.toLocaleString()}/>

        {showPartner && <div>
            <h1>Merchant ID you are saving withh</h1>
            <Input className='px-2 bg-[#F0F1F1] border-none sm:text-base'/>
        </div>}

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
        pattern="[0-9]*" inputMode="numeric" isNaira={type==="usave"?true:false} showFlag value={monthly.toLocaleString()}/>
        <h1 className='font-medium mb-1'>What day of the month works best for you</h1>
        <DayPicker className='mb-2'/>
        
        <h1 className='font-medium mb-1'>How many monhts are you saving</h1>
        <DurationPicker duration={duration} setChange={(value)=>{
            setDuration(value)
            setMonthly(Math.round(total/value))
        }
        }/>
            
  
        <PaymentTrigger title={`Complete savings : ₦${total.toLocaleString()}`}>
            <Button className='text-white bg-support flex w-full mt-8' size={"lg"}>Submit Request</Button>
        </PaymentTrigger>
  
    </div>
  )
}
