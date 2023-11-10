import { cn } from '@/lib/utils'
import React from 'react'

interface IActivityItem{
    className?:string
    text:string
}
export default function ActivityItem({className,text}:IActivityItem) {
  return (
    <div className={cn('rounded-md px-2 mb-3 rounded-br-none border py-3 flex-center',className)}>
        <span className="h-3 w-3 rounded-full bg-main"></span>
        <div className="grow pl-2 sm:pl-3">{text}</div>   
    </div>
  )
}
