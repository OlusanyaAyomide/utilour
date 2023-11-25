import { cn } from '@/lib/utils'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface IBalanceCard{
    description:string
    amount:string
    className?:string
    imageCode?:string
}

export default function BalanceCard({description,amount,className,imageCode}:IBalanceCard) {
    const imageUrl = `https://flagsapi.com/${imageCode}/flat/64.png`
    return (
    <div className={cn('mt-3 text-white mx-2 object-center sm:mx-6 px-2 py-6 h-[200px]  sm:h-[220px] xs:h-[210px] rounded-3xl bg-deepPurple',className)}>
        <div className='mt-6'>
            <div className="flex-center mb-2">
                {imageCode && <Avatar className='h-6 w-6 mr-1 bg-transparent'>
                    <AvatarFallback className='h-full w-full bg-transparent'></AvatarFallback>
                    <AvatarImage src={imageUrl}/>
                </Avatar>}
                <h1 className='text-white text-base font-medium '>{description}</h1>
            </div>
           
            <h1 className='font-bold text-3xl sm:text-4xl text-white'>{amount}</h1>
        </div>
    </div>
  )
}
