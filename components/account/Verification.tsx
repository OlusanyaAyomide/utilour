'use client'
import React from 'react'
import InputField from './InputField'
import { Button } from '../ui/button'
import IdenticationForm from './IdenticationForm'
import {useForm} from "react-hook-form"
import { IBvnn } from '@/interfaces/interface'
import { IBvnSchema} from '@/utils/validations'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Verification() {
    const {register,handleSubmit,formState:{errors},setValue} = useForm<IBvnn>({resolver:yupResolver(IBvnSchema)})
    const onSubmit = ({BvnNumber}:IBvnn)=>{
        console.log(BvnNumber)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="ml-[2px] my-10  font-medium text-shade mb-[2px] text-[22px] sm:text-2xl">Bvn Identification</h1>
            <InputField
                title='Bvn Number'
                placeholder='Enter Bvn'
                name='BvnNumber'
                error = {errors.BvnNumber?.message}
                register={register}
            />

            <Button className='px-6 h-12 mt-10 mb-6 w-[280px] text-white hover:bg-support hover:brightness-110 sm:px-8  mx-auto bg-support'>Verify Bvn
        </Button>
        </form>


        <IdenticationForm/>

    </div>
  )
}
