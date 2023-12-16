'use client'
import React,{useState} from 'react'
import CurencyFlag from '../utils/CurencyFlag'
import { countries } from '../utils/countries'
import { SelectTrigger,SelectContent,Select,SelectItem } from '../ui/select'
import { Defaultcountry ,ICountries} from '../utils/countries'
import { cn } from '@/lib/utils'
import { UseFormRegister } from 'react-hook-form'

interface INumberInput extends React.InputHTMLAttributes<HTMLInputElement> {
    className?:string
    onSelectCountry:(code:string)=>void
    register:UseFormRegister<any>
    name:string
    error?:string

}


export default function NumberInput({className,onSelectCountry,register,name,error,...rest}:INumberInput) {
      const [country,setCountry] = useState<ICountries>(Defaultcountry)
      const [open,setIsOpen] = useState(false)
    return (
    <div className={cn("w-full relative  md:w-6/12 md:pl-2 mb-6",className)}>
        <h1 className="ml-[2px] font-medium text-support mb-[2px] md:text-[15px]">Country</h1>
        <div className="flex-center h-12 px-2 border rounded-md">
            <CurencyFlag currency={country.countryCode} className=' mr-[2px]'/>
            <Select  open={open} value={country.callCode}>
                <SelectTrigger onClick={()=>setIsOpen(true)} className='w-fit px-0 py-0 focus-within:border-0 border-0 focus-visible:border-0'>
                    <span className='text-shade'>{country.callCode}</span>
                </SelectTrigger>
                <SelectContent  onBlur={()=>{
                    setTimeout(()=>{setIsOpen(false)},300)
                }} className='h-[268px] py-2 '>
                    <div className="py-2 h-full overflow-scroll default-scroll">
                        {countries.map((item,key)=>{
                            return<div key={key}>
                                <button onClick={()=>{
                                    setCountry(item)
                                    onSelectCountry(item.callCode)
                                    // setIsOpen(false)
                                }} className="text-shade py-2 hover:bg-accent w-full">{item.countryName}</button>
                                {/* <SelectItem value={item.callCode}>{item.countryName}</SelectItem> */}
                            </div>
                        })}
                    </div>
                </SelectContent>
            </Select>
            <input pattern="[0-9]*" inputMode="numeric" {...rest} {...register(name)} type="text" className='h-10 px-1 outline-none border-none grow' />
        </div>
        {error && <span className="text-red-500 absolute -bottom-2 left-2 text-[13px]">{error}</span>}
    </div>
  )
}
