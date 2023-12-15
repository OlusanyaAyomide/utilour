import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { cn } from '@/lib/utils'

interface ICurencyFlag{
    currency:string
    className?:string
}

export default function CurencyFlag({currency,className}:ICurencyFlag) {
    const imageUrl = `https://flagsapi.com/${currency}/flat/64.png`
    return (
        <Avatar className={cn('h-6 w-6 mr-1 bg-transparent',className)}>
            <AvatarFallback className='h-full w-full bg-transparent'></AvatarFallback>
            <AvatarImage src={imageUrl}/>
        </Avatar>
  )
}
