import { cn } from '@/lib/utils'
import React from 'react'

interface IBalanceCard{
    description:string
    amount:string
    className?:string
}

export default function BalanceCard({description,amount,className}:IBalanceCard) {
  return (
    <div className={cn('mt-3 text-white mx-2 object-center sm:mx-6 px-2 py-6 h-[200px]  sm:h-[220px] xs:h-[210px] rounded-3xl bg-deepPurple',className)}>
        <div className='mt-6'>
            <h1 className='text-white font-medium mb-2'>{description}</h1>
            <h1 className='font-bold text-3xl sm:text-4xl text-white'>{amount}</h1>
        </div>
    </div>
  )
}
