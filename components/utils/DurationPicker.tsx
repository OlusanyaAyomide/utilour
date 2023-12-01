import React,{useState} from 'react'
import { Popover,PopoverTrigger,PopoverContent } from '../ui/popover'
import { Icons } from '@/utils/Icons'

interface IDurationPicker{
    duration:number
    setChange:(selected:number)=>void
}
export default function DurationPicker({duration,setChange}:IDurationPicker) {
    const [isOpen,setIsOpen] = useState(false)
    const numberArray = Array.from({ length: 24 }, (_, index) => index + 1)

  return (
    <Popover open={isOpen}>
        <PopoverTrigger asChild onClick={()=>{setIsOpen(true)}}>
            <div>
                <button className='px-6 border full-shadow border-support py-2 rounded-lg'>
                    {duration} Months
                </button>
            </div>
        </PopoverTrigger>
        <PopoverContent className='px-1 pt-3 pb-2 sm:w-[330px] rounded-md' onFocusOutside={(e)=>{setIsOpen(false)}}>
            <button className="mb-4 px-1 ml-auto block mr-1" onClick={()=>{setIsOpen(false)}}>
                    <Icons.close className = "text-xl text-gray-400"/>
            </button>
            <div className="flex flex-wrap">
                {numberArray.map((item,key)=>(
                    <div className='w-4/12 px-2 mb-2'  key={key}>
                        <button onClick={()=>{
                            setIsOpen(false)
                            setChange(item)
                        }} className='w-full py-2 bg-inputgray rounded-lg hover:bg-support hover:text-white flex-center justify-center'>
                            {item} month{item>1?"s":""}
                        </button>
                    </div>
                ))}
            </div>
        </PopoverContent>
    </Popover>

  )
}
