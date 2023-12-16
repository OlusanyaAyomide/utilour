'use client'
import React from 'react'
import InputField from './InputField'
import { Button } from '../ui/button'
import IdenticationForm from './IdenticationForm'


export default function Verification() {
  return (
    <div>
        <h1 className="ml-[2px] my-10  font-medium text-shade mb-[2px] text-[22px] sm:text-2xl">Bvn Identification</h1>
        <InputField
            title='Bvn Number'
            placeholder='Enter Bvn'
        />

        <Button className='px-6 h-12 mt-10 mb-6 w-[280px] text-white hover:bg-support hover:brightness-110 sm:px-8  mx-auto bg-support'>Verify Bvn
        </Button>

        <IdenticationForm/>

    </div>
  )
}
