'use client'
import React, { useState } from 'react'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { DatePicker, Space } from 'antd';
import { Button } from '../ui/button'
import InputField from './InputField';
import { ISessionInterface } from '@/interfaces/interface';
import { countries } from '../utils/countries';
import NumberInput from './NumberInput';
import { yupResolver } from "@hookform/resolvers/yup"
import { ICompleteProfile } from '@/interfaces/interface';
import { profileSchema } from '@/utils/validations';
import { useForm } from 'react-hook-form';



export default function UserProfile({firstName,lastName,email}:ISessionInterface) {

    const {register,handleSubmit,formState:{errors},setValue} = useForm<ICompleteProfile>({resolver:yupResolver(profileSchema),defaultValues:{countryCode:"+234"}})

    const onSubmit = (value:ICompleteProfile)=>{
        console.log(value)
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}  className='mt-5 flex flex-wrap'>
            
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
                name='middleName'
                error = {errors.middleName?.message}
                title='MiddleName'
                register={register}
                placeholder={"Enter MiddleName"}
            />

            <InputField
                title='Email'
                disabled
                placeholder={email}
            />

            <div className='mb-6  relative w-full'>
                 <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">Gender</h1>
                <Select onValueChange={(val)=>{setValue("gender",val)}}>
                    <SelectTrigger className='w-full h-12  focus-visible:border'>
                        <SelectValue placeholder = "Choose gender"/>
                    </SelectTrigger>
                    <SelectContent className='w-full'>
                        <SelectItem className='w-full' value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="none">Prefer Not to say</SelectItem>
                    </SelectContent>
                </Select>
                {errors.gender && <span className="text-red-500 absolute -bottom-2 left-2 text-[13px]">{errors.gender.message}</span>}
            </div>
            
            <div className="mb-6 w-full">
                <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">Date Of Birth</h1>
                <DatePicker onSelect={(date)=>{
                    const selected = date.toDate()
                    setValue("dateOfBirth",selected)
                }} className='h-12 focus-visible:border focus-visible:border-border w-full'/>
            </div>

            <div className="w-full md:w-6/12 md:pr-2 mb-6 relative">
                <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">Country</h1>
                <Select onValueChange={(val)=>{setValue("country",val)}}>
                    <SelectTrigger className='w-full h-12 focus-visible:border'>
                        <SelectValue placeholder="Choose Country"/>
                    </SelectTrigger>
                    <SelectContent className='h-[260px] overflow-auto default-scroll'>
                        {countries.map((item,key)=>(
                            <SelectItem value={item.countryName} key={key}>{item.countryName}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.countryCode && <span className="text-red-500 absolute -bottom-2 left-2 text-[13px]">{errors.countryCode.message}</span>}
            </div>

            <NumberInput onSelectCountry={(code)=>{setValue("countryCode",code)}} register={register} name="phoneNumber"/>

            <Button className='px-6 h-12 mt-10 mb-6 w-[280px] text-white hover:bg-support hover:brightness-110 sm:px-8  mx-auto bg-support'>Save Changes
            </Button>
        </form>
  )
}
