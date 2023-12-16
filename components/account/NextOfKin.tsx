'use client'
import React from 'react'
import InputField from './InputField'
import NumberInput from './NumberInput'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { Button } from '../ui/button'
import { yupResolver } from "@hookform/resolvers/yup"
import { INextOfKin } from '@/interfaces/interface';
import { nextOfKinSchema } from '@/utils/validations';
import { useForm } from 'react-hook-form';


export default function NextOfKin() {
 
    const {register,handleSubmit,formState:{errors},
    setValue} = useForm<INextOfKin>({resolver:yupResolver(nextOfKinSchema),defaultValues:{countryCode:"+234"}})

    const onSubmit =(value:INextOfKin)=>{
        console.log(value)
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}  action="" className='mt-5 flex flex-wrap'>
        <InputField
            title='First Name'
            name="firstName"
            error={errors.firstName?.message}
            register={register}
            className='w-full md:pr-2 md:w-6/12'
            placeholder='Next of Kin firstName'

        />
        <InputField
            title='Last Name'
            register={register}
            name='lastName'
            error={errors.lastName?.message}
            placeholder='Next of Kin lastName'
            className='w-full md:pl-2 md:w-6/12'
        />
        <InputField
            title='Email Address'
            name='email'
            register={register}
            error={errors.email?.message}
            placeholder='Enter Email Address'

        />
        <NumberInput error={errors.phoneNumber?.message} onSelectCountry={(val)=>{setValue("phoneNumber",val)}} className = "md:w-full" register={register} name="phoneNumber"/>

        <div className='mb-6 w-full relative'>
             <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">RelationShip</h1>
            <Select onValueChange={(val)=>{setValue("relationship",val)}}>
                <SelectTrigger className='w-full h-12  focus-visible:border'>
                    <SelectValue placeholder = "Select Relationship"/>
                </SelectTrigger>
                <SelectContent className='w-full'>
                    <SelectItem className='w-full' value="sibling">Sibling</SelectItem>
                    <SelectItem value="relative">Relative</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                </SelectContent>
            </Select>
            {errors.relationship && <span className="text-red-500 absolute -bottom-2 left-2 text-[13px]">{errors.relationship.message}</span>}
        </div>

        <InputField
            title='Next of Kin Address'
            name='address'
            placeholder='Enter Address'
            register={register}
            error={errors.address?.message}
        />

        <Button className='px-6 h-12 mt-10 mb-6 w-[280px] text-white hover:bg-support hover:brightness-110 sm:px-8  mx-auto bg-support'>Save Changes
        </Button>

    </form>
  )
}
