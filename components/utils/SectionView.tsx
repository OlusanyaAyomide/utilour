import { cn } from '@/lib/utils'
import React from 'react'

interface ISectionView{
    header:string
    text:string
    className?:string

}


export default function SectionView({header,text,className}:ISectionView) {
  return (
    <div className={cn('h-[80px] xs:h-[86px] text-white bg-gradient-to-b pt-4 from-[#29063d] to-support',className)}>
        <h1 className="lg:pl-12 text-lg sm:text-xl max-lg:text-center font-semibold">{header}</h1>
        <h1 className='text-2xl sm:text-3xl lg:pl-12 text-white font-bold max-lg:text-center'>{text}</h1>
    </div>
  )
}
