import React, { useState } from 'react'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { DatePicker, Space } from 'antd';
import { Button } from '../ui/button'
import InputField from './InputField';
import { ISessionInterface } from '@/interfaces/interface';
import { Defaultcountry, ICountries } from '../utils/countries';
import { countries } from '../utils/countries';
import CurencyFlag from '../utils/CurencyFlag';


export default function UserProfile({firstName,lastName,email}:ISessionInterface) {
    const [country,setCountry] = useState<ICountries>(Defaultcountry)
    console.log(country)
    return (
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
            
            <div className="w-full md:w-6/12 md:pl-2 mb-6">
                <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">Country</h1>
                <div className="flex-center h-12 px-2 border rounded-md">
                    <CurencyFlag currency={country.countryCode} className=' mr-[2px]'/>
                    <Select value={country.callCode} onValueChange={(val)=>{
                        console.log(val)
                        const selected = countries.find((item=>item.callCode === val))
                        console.log(selected)
                        if(selected){setCountry(selected)}
                    }}>
                        <SelectTrigger className='w-fit px-0 py-0 focus-within:border-0 border-0 focus-visible:border-0'>
                            {/* <SelectValue defaultValue={country.callCode}/> */}
                            <span className='text-shade'>{country.callCode}</span>
                        </SelectTrigger>
                        <SelectContent className='h-[260px] overflow-auto default-scroll'>
                            {countries.map((item,key)=>(
                                <SelectItem value={item.callCode} key={key}>{item.countryName}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <input type="text" className='h-10 px-1 outline-none border-none grow' />
                </div>
            </div>

            <Button className='px-6 h-12 mt-10 mb-6 w-[280px] text-white hover:bg-support hover:brightness-110 sm:px-8  mx-auto bg-support'>Save Changes
            </Button>
        </div>
  )
}
