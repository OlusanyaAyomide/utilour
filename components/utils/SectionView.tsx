import { cn } from '@/lib/utils'
import React from 'react'

interface ISectionView{
    header:string
    text:string
    className?:string

}


export default function SectionView({header,text,className}:ISectionView) {
  return (
    <div className={cn('h-[80px] xs:h-[86px]  lg:h-fit  lg:mt-2 lg:py-2 text-white lg:flex lg:flex-center max-lg:bg-gradient-to-b pt-4 from-[#29063d] to-support',className)}>
        <h1 className="lg:pl-8 text-lg sm:text-xl max-lg:text-center font-semibold lg:text-shade">{header}</h1>
        <h1 className='text-2xl sm:text-3xl lg:pl-2 text-white font-bold max-lg:text-center lg:text-main'>{text}</h1>
    </div>
  )
}
