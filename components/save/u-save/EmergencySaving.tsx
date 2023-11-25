'use client'
import { Button } from '@/components/ui/button'
import AmountInput from '@/components/utils/AmountInput'
import React, { useState } from 'react'

const emergencyList =[50000,100000,200000,500000,1000000]

export default function EmergencySaving() {

    const [number,setNumber] = useState(20000)
    return (
    <div className='mt-3 pb-20'>
        <h1 className="font-medium mb-1">What is your goal</h1>
        <AmountInput isNaira  showFlag pattern="[0-9]*" inputMode="numeric" className='mb-2'/>

        <h1 className="font-medium mb-1">How much would you like to start with ?</h1>
        <AmountInput  isNaira value={number.toLocaleString()} showFlag pattern="[0-9]*" inputMode="numeric" className='mb-1'/>
        <div className="flex-center flex-wrap mt-4 pb-8">
            {emergencyList.map((item,key)=>(
               <div className='flex-center w-4/12 mb-3' key={key}>
                    <button  onClick={()=>{setNumber(item)}} className={`h-4 w-4  rounded-full grid shrink-0 mr-1 xs:mr-3 place-content-center ${number === item?"bg-support":"bg-gray-300"}`}>
                        <span className='h-2 w-2 rounded-full bg-white'></span>
                    </button>
                    <span className='ml-1 text-[15px]'>{item.toLocaleString()}</span>
               </div> 
            ))}
        </div>

        <AmountInput isNaira  placeholder='Name Of Plan' className='mb-1'/>
        <Button className='text-white bg-support flex w-full mt-8' size={"lg"}>Submit Request</Button>
    </div>
  )
}
