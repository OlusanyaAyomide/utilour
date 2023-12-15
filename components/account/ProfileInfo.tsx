'use client'
import React,{useRef} from 'react'
import { Avatar,AvatarFallback,AvatarImage } from '../ui/avatar'
import { ISessionInterface } from '@/interfaces/interface'
import InputField from './InputField'
import { Icons } from '@/utils/Icons'

import IdenticationForm from './IdenticationForm'
import UserProfile from './UserProfile'

export default function ProfileInfo(user:ISessionInterface) {
    return (
    <div className='mt-6 md:mt-8'>
        <div className="flex max-sm:flex-col sm:items-center max-md:w-fit max-sm:mx-auto">
            <Avatar className='h-24 w-24 max-sm:mx-auto border-support overflow-hidden border-2  pt-[2px] md:h-28 md:w-28 max-sm:mb-2 sm:mr-3 relative '>
                <AvatarImage src='/avatar.png' className=''/>
                <AvatarFallback>Ul</AvatarFallback>
                <div className="absolute inset-0 bg-black/10"></div>
                <Icons.camera className = "text-2xl cursor-pointer md:text-3xl text-white absolute right-2 bottom-3"/>
            </Avatar>
            <h1 className="text-[22px] md:text-2xl flex-center font-semibold text-shade">
                <span>{user.firstName}</span>
                <span className="ml-1">{user.lastName}</span>
            </h1>
        </div>
        <UserProfile {...user}/>
        <IdenticationForm/>
    </div>
  )
}
