'use client'
import React, { useRef, useState } from 'react'
import { Button } from '../ui/button'
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger} from "@/components/ui/accordion"
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from '../ui/select'
import { banklist } from '@/utils/client/bankList'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Input } from '../ui/input'
import { Icons } from '@/utils/Icons'

export default function AddBank() {
    const ref = useRef<HTMLButtonElement>(null)
    const [isVisible,setisVisible] = useState(false)
    const [bankName,setbankName] = useState("")
    return (
    <div className='mt-1'>
        {!isVisible && <Button onClick={()=>{
            ref.current?.click()
            setisVisible(true)
        }} className='flex items-center max-md:mx-auto px-6 h-12 mt-10 mb-6 w-[280px] text-white hover:bg-support hover:brightness-110 sm:px-8  mx-auto bg-support '>
            <span className='mr-3 text-xl'>+</span>
            <span>Add Bank</span>
        </Button>}
        <Accordion  collapsible type='single'>
            <AccordionItem  value='content'>
                <AccordionTrigger className='hidden' ref={ref}></AccordionTrigger>
                <AccordionContent>
                <button  className='block ml-auto' onClick={()=>{
                    ref.current?.click()
                    setisVisible(false)
                }}>
                    <Icons.angleUp className ="text-shade text-2xl"/>
                </button>
                <h1 className="ml-[2px] my-2  font-medium text-shade mb-[2px] text-[22px] sm:text-2xl">Add New Account</h1>
                <div className='mb-6  relative w-full'>
                    <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">Select Bank</h1>
                    <Select onValueChange={(val)=>{
                        console.log(val)
                        setbankName(val)}}>
                        <SelectTrigger className='w-full h-12 flex items-center focus-visible:border'>
                            <SelectValue placeholder = "Select Bank" className='flex items-center'/>
                        </SelectTrigger>
                        <SelectContent>
                            <div className='w-full overflow-auto default-scroll h-[260px]'>
                                {banklist.map((item,key)=>(
                                <SelectItem key={key} className={` ${key%2===0?"bg-gray-50/80":""} w-full flex items-center`} value={item.name}>
                                    <Avatar className='h-7 w-7 shrink-0 mr-1'>
                                        <AvatarImage src={item.logo}/>
                                        <AvatarFallback>UT</AvatarFallback>
                                    </Avatar>
                                    <span>{item.name}</span>
                                </SelectItem> 
                        ))}  
                            </div>

                        </SelectContent>
                    </Select>
                </div>
                <div className='mb-6'>
                    <h1 className='ml-[2px] font-medium text-support mb-[2px] md:text-[15px]'>Account Number</h1>
                    <Input className='focus-visible:border focus-visible:ring-0 h-12'/>
                </div>
                <div></div>
                <Button className='px-6 h-12 mt-10 mb-6 w-[280px] text-white hover:bg-support hover:brightness-110 sm:px-8  mx-auto bg-support'>
                    Add Bank Account
                </Button>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  )
}
