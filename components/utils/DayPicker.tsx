import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Icons } from '@/utils/Icons'
import { getMonthDate } from '@/utils/client/util'
import { Button } from '../ui/button'


interface IDatePicker{
    className?:string
    text?:string

}

interface IDates{
    name:string
    day:number
}

export default function DayPicker({className,text}:IDatePicker) {
    const dates = getMonthDate()
    const [isOpen,setIsOpen] = useState(false)
    const [selected,setSelected] = useState<IDates | null>(null)
  return (
    <div className={cn("py-2 bg-inputgray justify-between px-3 flex-center",className)}>
        <h1>
            {!selected && <span>{"Not Selected"}</span>}
            {selected && <span>{selected.name}</span>}
        </h1>
        <Popover open={isOpen}>
            <PopoverTrigger asChild onClick={()=>{setIsOpen((prev=>!prev))}}>
                  <Button  size="icon" variant={"ghost"} className='2xl px-2 py-[2px]'>
                      <Icons.angleDown className = {`text-xl transition-all duration-300 ${isOpen?" rotate-180":""}`}/>
                  </Button>
            </PopoverTrigger>
            <PopoverContent className='px-1 pt-1 pb-2 sm:w-[330px' onFocusOutside={(e)=>{setIsOpen(false)}}>
                <button className="mb-4 px-1 ml-auto block mr-1" onClick={()=>{setIsOpen(false)}}>
                    <Icons.close className = "text-xl text-gray-400"/>
                </button>
                <h1 className="text-center font-medium text-gray-700">Select Day</h1>
                <div className="mt-3 flex flex-wrap">
                    {dates.map((item,key)=>(
                        <Button 
                            onClick={()=>{
                                setSelected(item);
                                setIsOpen(false)
                            }} key={key} size={"icon"} variant={"ghost"} className={`hover:bg-support mx-2 mb-2 hover:text-white ${key+1 === dates.length?"w-fit px-4 flex justify-start":""}`}>
                                {item.name}
                        </Button>))}
                </div>
            </PopoverContent>
        </Popover>
    </div>
  )
}
