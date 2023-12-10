'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CurencyFlag from '../utils/CurencyFlag';
import { useCustomToast } from '../utils/useCustomToast';
import { Icons } from '@/utils/Icons';

interface IUserBalance{
    dollarAmount:string
    nairaAmount:string
    uId:string
    accountName:string
}
export default function UserBalance({dollarAmount,nairaAmount,uId,accountName}:IUserBalance) {
    const [isNaira,setIsNaira] = useState(true)
    const toast = useCustomToast()

    return (
    <div className='flex flex-wrap max-md:flex-col'>
        <div className="w-full pl-3 md:pl-5">
            <div onClick={()=>{setIsNaira(prev=>!prev)}} className="w-[76px] h-9 pt-[2px]  bg-gray-200  rounded-full cursor-pointer">
                <button onClick={()=>{setIsNaira(prev=>!prev)}} className={`rounded-full grid place-content-center h-8 w-8 transition-all ${isNaira?"translate-x-1 bg-main":"bg-support translate-x-[41px]"} duration-150`}>
                    {isNaira?<Icons.naira className = "text-white text-xl"/>:<Icons.dollar className ="text-xl text-white"/>}
                </button>
            </div>
        </div>
        <div className={'mt-3 text-white mx-2 md:min-w-[400px] object-center sm:mx-6 px-2 py-4 h-[215px]  sm:h-[220px] xs:h-[215px] rounded-3xl bg-deepPurple'}>
            <div className='mt-6'>
                <div className="flex-center mb-2">
                    <CurencyFlag currency={isNaira?"NG":"US"}/>
                    <h1 className='text-white text-base font-medium '>{`Total Amount in ${isNaira?"Naira":"Dollar"} wallet`}</h1>
                </div>
                <h1 className='font-bold text-3xl sm:text-4xl text-white'>{isNaira?nairaAmount:dollarAmount}</h1>
            </div>
            <div className='flex sm:items-center max-sm:flex-col mt-1 sm:mt-4 text-white'>
                <div className="max-sm:mb-1 sm:mr-5">
                    <h1>Utilor ID</h1>
                    <h1 className=" mt-[2px] flex-center">
                        <span className='text-base sm:text-lg font-semibold'>{uId}</span>
                        <CopyToClipboard text={uId} onCopy={()=>{toast("good",`${uId} copied to clipboard`)}}>
                            <button className='ml-2'><Icons.copy className = "text-xl text-white"/></button>
                        </CopyToClipboard>
                    </h1>
                </div>
                <div>
                    <h1>Account Name</h1>
                    <h1 className="font-semibold mt-[2px] flex-center">
                        <span className='text-base sm:text-lg font-medium'>{accountName}</span>
                    </h1>
                </div>
            </div>
        </div>
    </div>

  )
}
