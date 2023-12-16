import React from 'react'
import InputField from './InputField'
import NumberInput from './NumberInput'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { Button } from '../ui/button'


export default function NextOfKin() {
  return (
    <form action="" className='mt-5 flex flex-wrap'>
        <InputField
            title='First Name'
            className='w-full md:pr-2 md:w-6/12'
        />
        <InputField
            title='Last Name'
            className='w-full md:pl-2 md:w-6/12'
        />
        <InputField
            title='Email Address'
        />
        {/* <NumberInput/> */}

        <div className='mb-6 w-full'>
             <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">RelationShip</h1>
            <Select>
                <SelectTrigger className='w-full h-12  focus-visible:border'>
                    <SelectValue placeholder = "Select Relationship"/>
                </SelectTrigger>
                <SelectContent className='w-full'>
                    <SelectItem className='w-full' value="sibling">Sibling</SelectItem>
                    <SelectItem value="relative">Relative</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <InputField
            title='Next of Kin Address'
        />

        <Button className='px-6 h-12 mt-10 mb-6 w-[280px] text-white hover:bg-support hover:brightness-110 sm:px-8  mx-auto bg-support'>Save Changes
        </Button>

    </form>
  )
}
