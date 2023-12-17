import React from 'react'
import InputField from './InputField'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { Button } from '../ui/button'
import {useForm} from "react-hook-form"
import { IIDentitiyForm } from '@/interfaces/interface'
import { IdentificationSchema } from '@/utils/validations'
import { yupResolver } from '@hookform/resolvers/yup'

export default function IdenticationForm() {
    const {register,handleSubmit,formState:{errors},setValue} = useForm<IIDentitiyForm>({resolver:yupResolver(IdentificationSchema)})

    const onSubmit = (value:IIDentitiyForm)=>{
        console.log(value)
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}  className='pb-4'>
        <h1 className="ml-[2px] my-10  font-medium text-shade mb-[2px] text-[22px] sm:text-2xl">Identification</h1>

        <div className='mb-6 w-full relative'>
            <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">Identification Type</h1>
            <Select onValueChange={(val)=>{setValue("identificationType",val)}}>
                <SelectTrigger className='w-full h-12  focus-visible:border'>
                    <SelectValue placeholder = "Select Identification type"/>
                </SelectTrigger>
                <SelectContent className='w-full'>
                    <SelectItem className='w-full' value="passport">International Passport</SelectItem>
                    <SelectItem value="NationalId">NationalID</SelectItem>
                    <SelectItem value="Drivers License">Drivers Licence</SelectItem>
                </SelectContent>
            </Select>

            {errors.identificationType && <span className="text-red-500 absolute -bottom-4 left-2 text-[13px]">{errors.identificationType.message}</span>}
        </div>
        <InputField
            title='ID Number'
            name='identificationNumber'
            error = {errors.identificationNumber?.message}
            register={register}
            placeholder={"Enter Identication number"}

        />
        <InputField
            title='Confirm ID  Number'
            name='confirmIdentityNumber'
            error = {errors.confirmIdentityNumber?.message}
            register={register}
            placeholder={"Confirm Identication number"}
        />
        
        <Button className='px-6 h-12 mt-10 mb-6 w-[280px] text-white hover:bg-support hover:brightness-110 sm:px-8  mx-auto bg-support'>Submit Identity
        </Button>
    </form>
  )
}
