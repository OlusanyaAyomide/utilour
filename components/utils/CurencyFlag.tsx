import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface ICurencyFlag{
    currency:"NG" | "US"
}

export default function CurencyFlag({currency}:ICurencyFlag) {
    const imageUrl = `https://flagsapi.com/${currency}/flat/64.png`
    return (
        <Avatar className='h-6 w-6 mr-1 bg-transparent'>
            <AvatarFallback className='h-full w-full bg-transparent'></AvatarFallback>
            <AvatarImage src={imageUrl}/>
        </Avatar>
  )
}
