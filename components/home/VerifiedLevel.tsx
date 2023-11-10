import { cn } from '@/lib/utils'
import React from 'react'

export default function VerifiedLevel({className}:{className?:string}) {

  return (
    <div className={cn('max-sm:w-full sm:ml-3 lg:pr-16 sm:pr-2 md:pr-8 px-2 max-sm:mb-5',className)}>
        <h1 className="text-shade mb-2 font-medium text-base pl-7 xl:pl-9">Completed</h1>
        <div className='h-40 w-40 sm:h-36 sm:w-36 md:h-[152px] md:w-[152px] xl:w-44 xl:h-44 rounded-full  shadow-sm grid place-items-center' style={{background:`conic-gradient(#00032B 25%,#02074b1b 25%)`}}>
          <div className='h-[108px] w-[108px] sm:h-[92px] sm:w-[92px] md:w-[100px] md:h-[100px] xl:h-28 xl:w-28 bg-white rounded-full grid place-items-center font-semibold'>
            <span className='text-3xl text-main font-bold'>
                25%
            </span>
          </div>  
        </div>
    </div>

  )
}
