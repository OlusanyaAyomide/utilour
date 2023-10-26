import React from 'react'
import { cn } from '@/lib/utils'

export default function Logo({className}:{className?:string}) {
  return (
    <div className={cn(`border w-[120px] lg:w-[140px] h-[45px] text-2xl flex-center`,className)}>Logo</div>
  )
}
