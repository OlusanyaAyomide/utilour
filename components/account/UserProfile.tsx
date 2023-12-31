'use client'
import React, { useState } from 'react'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { DatePicker, Space } from 'antd';
import { Button } from '../ui/button'
import InputField from './InputField';
import { IProfileAccount, ISessionInterface } from '@/interfaces/interface';
import { countries } from '../utils/countries';
import NumberInput from './NumberInput';
import { yupResolver } from "@hookform/resolvers/yup"
import { ICompleteProfile } from '@/interfaces/interface';
import { profileSchema } from '@/utils/validations';
import { useForm } from 'react-hook-form';
import RingSpinner from '@/components/utils/spinners/RingSpinner'
import { useMutateData } from '@/hooks/useMutateData';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';


export default function UserProfile({firstName,lastName,email,middleName,dateOfBirth,gender,country,countryCode,phoneNumber}:IProfileAccount) {
    const date = new Date(dateOfBirth || "")
    const router = useRouter()
    const {register,handleSubmit,formState:{errors},setValue} = useForm<ICompleteProfile>(
        {resolver:yupResolver(profileSchema),defaultValues:{countryCode:countryCode || "+234" ,middleName,dateOfBirth:dateOfBirth?date:undefined,gender,country,phoneNumber}}
        )

    const {isPending,mutate} = useMutateData({url:"/api/user/profile/create",successText:"Profile Succesfully Updated",onSuccess:(_)=>{
        router.refresh()
    }})

    const onSubmit = (value:ICompleteProfile)=>{
        mutate(value)
    }
    const dayjsObject  = dayjs(dateOfBirth)
    
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
                        <SelectValue placeholder={`${gender || "Choose gender" }`} />
                    </SelectTrigger>
                    <SelectContent className='w-full'>
                        <SelectItem className='w-full' value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="none">Prefer Not to say</SelectItem>
                    </SelectContent>
                </Select>
                {errors.gender && <span className="text-red-500 absolute -bottom-4 left-2 text-[13px]">{errors.gender.message}</span>}
            </div>
            
            <div className="mb-6 w-full relative">
                <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">Date Of Birth</h1>
                <DatePicker defaultValue={dateOfBirth?dayjsObject:undefined} onSelect={(date)=>{
                    const selected = date.toDate()
                    setValue("dateOfBirth",selected)
                }} className='h-12 focus-visible:border focus-visible:border-border w-full'/>
                {errors.dateOfBirth && <span className="text-red-500 absolute -bottom-4 left-2 text-[13px]">{errors.dateOfBirth.message}</span>}
            </div>

            <div className="w-full md:w-6/12 md:pr-2 mb-6 relative">
                <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">Country</h1>
                <Select  onValueChange={(val)=>{setValue("country",val)}}>
                    <SelectTrigger className='w-full h-12 focus-visible:border'>
                        <SelectValue placeholder={`${country || "Select Country" }`}/>
                    </SelectTrigger>
                    <SelectContent className='h-[260px] overflow-auto default-scroll'>
                        {countries.map((item,key)=>(
                            <SelectItem value={item.countryName} key={key}>{item.countryName}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.countryCode && <span className="text-red-500 absolute -bottom-2 left-2 text-[13px]">{errors.countryCode.message}</span>}
            </div>

            <NumberInput error={errors.phoneNumber?.message} onSelectCountry={(code)=>{setValue("countryCode",code)}} register={register} name="phoneNumber"/>

            <Button disabled={isPending} className='px-6 h-12 mt-10 mb-6 w-[280px] text-white hover:bg-support hover:brightness-110 sm:px-8  mx-auto bg-support'>
                {isPending?<RingSpinner/>:"Save Changes"}
            </Button>
        </form>
  )
}
