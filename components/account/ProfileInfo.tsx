'use client'
import React,{useRef} from 'react'
import { Avatar,AvatarFallback,AvatarImage } from '../ui/avatar'
import { ISessionInterface } from '@/interfaces/interface'
import InputField from './InputField'
import { Icons } from '@/utils/Icons'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { DatePicker, Space } from 'antd';

export default function ProfileInfo({firstName,lastName,email}:ISessionInterface) {
    
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
                <span>{firstName}</span>
                <span className="ml-1">{lastName}</span>
            </h1>
        </div>
        <div className='mt-5 flex flex-wrap'>

            <InputField
                title='FirstName'
                className='md:w-6/12 md:pr-3'
                disabled
                placeholder={firstName}
            />
            <InputField
                title='LastName'
                className='md:w-6/12 md:pl-3'
                disabled
                placeholder={lastName}
            />
            <InputField
                title='MiddleName'
                placeholder={"Enter MiddleName"}
            />
            <InputField
                title='Email'
                disabled
                placeholder={email}
            />
            <div className='mb-6 w-full'>
                 <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">Gender</h1>
                <Select>
                    <SelectTrigger className='w-full h-12  focus-visible:border'>
                        <SelectValue placeholder = "Choose gender"/>
                    </SelectTrigger>
                    <SelectContent className='w-full'>
                        <SelectItem className='w-full' value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="none">Prefer Not to say</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="mb-6 w-full">
                <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">Date Of Birth</h1>
                <DatePicker className='h-12 focus-visible:border focus-visible:border-border w-full'/>
            </div>
        </div>
    </div>
  )
}
