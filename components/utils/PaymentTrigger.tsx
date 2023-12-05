'use client'
import React, { useState } from 'react'
import { Dialog,DialogTrigger,DialogClose, DialogContent } from '../ui/dialog'
import { Icons } from '@/utils/Icons'
import { Button } from '../ui/button'


interface IPaymentTrigger{
    children:React.ReactNode
    title:string
}
type TOptions = "ustash" | "transfer" | "card"
export default function PaymentTrigger({children,title}:IPaymentTrigger) {
    const [options,setOptions] = useState<TOptions | null>(null) 
  return (
    <Dialog>
        <DialogTrigger asChild>
            <div>{children}</div>
        </DialogTrigger>
        <DialogContent className='py-0 px-0 rounded-lg overflow-hidden'>
            <div className="flex-center bg-page px-3 py-2 shadow-sm justify-between">
                <span className='font-medium text-[15px]'>{title}</span>
                <DialogClose>
                    <div>
                        <button className='h-9 w-9 group hover:border-border  grid place-content-center rounded-full'>
                            <Icons.close className = "text-shade group-hover:text-main text-xl"/>
                        </button>
                    </div>
                </DialogClose>
            </div>
            <div className="py-2">
                <h1 className="font-medium text-[15px] px-5">Payment Options</h1>

                <div onClick={()=>{setOptions("ustash")}} className={`mt-4 cursor-pointer mb-4 bg-page rounded-lg px-2 mx-4 py-3 flex-center ${options === "ustash"?"border border-main":""}`}>
                    <Icons.stash className = "text-2xl text-main"/>
                    <span className='text-shade ml-4'>Pay with U stash</span>
                </div>

                <div onClick={()=>{setOptions("card")}} className={`my-6 cursor-pointer bg-page rounded-lg px-2 mx-4 py-3 flex-center ${options === "card"?"border border-main":""}`}>
                    <Icons.card className = "text-2xl text-main"/>
                    <span className='text-shade ml-4'>Pay with Card</span>
                </div>

                <div onClick={()=>{setOptions("transfer")}} className={`my-6 cursor-pointer bg-page rounded-lg px-2 mx-4 py-3 flex-center ${options === "transfer"?"border border-main":""}`}>
                    <Icons.bank className = "text-2xl text-main"/>
                    <span className='text-shade ml-4'>Pay with Tranfer</span>
                </div>
            </div>
            <div className="px-4">
                <Button disabled={!!!options} size={"lg"} className='mt-3 mb-3 disabled:bg-shade  text-white w-full flex bg-main'>Continue</Button>
            </div>
 
        </DialogContent>
    </Dialog>
  )
}
