import React from 'react'
import InputField from './InputField'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { Button } from '../ui/button'

export default function IdenticationForm() {
  return (
    <div className='pb-4'>
        <h1 className="ml-[2px] my-10  font-medium text-shade mb-[2px] text-[22px] sm:text-2xl">Identification</h1>
        <div className='mb-6 w-full'>
            <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">Identification Type</h1>
            <Select>
                <SelectTrigger className='w-full h-12  focus-visible:border'>
                    <SelectValue placeholder = "Select Identification type"/>
                </SelectTrigger>
                <SelectContent className='w-full'>
                    <SelectItem className='w-full' value="passport">International Passport</SelectItem>
                    <SelectItem value="NationalId">NationalID</SelectItem>
                    <SelectItem value="Drivers License">Drivers Licence</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <InputField
            title='ID Number'
        />
        <InputField
            title='Confirm ID  Number'
        />
        
        <Button className='px-6 h-12 mt-10 mb-6 w-[280px] text-white hover:bg-support hover:brightness-110 sm:px-8  mx-auto bg-support'>Save Changes
        </Button>
    </div>
  )
}
