import React, { useState } from 'react'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { DatePicker, Space } from 'antd';
import { Button } from '../ui/button'
import InputField from './InputField';
import { ISessionInterface } from '@/interfaces/interface';
import { countries } from '../utils/countries';
import CurencyFlag from '../utils/CurencyFlag';
import NumberInput from './NumberInput';


export default function UserProfile({firstName,lastName,email}:ISessionInterface) {
    return (
        <form className='mt-5 flex flex-wrap'>
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

            <div className="w-full md:w-6/12 md:pr-2 mb-6">
                <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">Country</h1>
                <Select>
                    <SelectTrigger className='w-full h-12 focus-visible:border'>
                        <SelectValue placeholder="Choose Country"/>
                    </SelectTrigger>
                    <SelectContent className='h-[260px] overflow-auto default-scroll'>
                        {countries.map((item,key)=>(
                            <SelectItem value={item.countryName} key={key}>{item.countryName}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <NumberInput/>

            <Button className='px-6 h-12 mt-10 mb-6 w-[280px] text-white hover:bg-support hover:brightness-110 sm:px-8  mx-auto bg-support'>Save Changes
            </Button>
        </form>
  )
}
