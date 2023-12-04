'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Icons } from '@/utils/Icons'

export default function Back() {
    const router = useRouter()
    //left-20
    return (
    <button className='mb-2 mt-4 z-10 mr-8 max-lg:hidden block ml-auto py-1 relative rounded-xl transition-all duration-300 flex group pr-6 group hover:bg-accent px-3 flex-center ' onClick={()=>{router.back()}}>
        <span className='mr-1'>
            <Icons.angleLeft className = "text-shade group-hover:text-main text-xl"/>
        </span>
        <span className='font-medium group-hover:text-main group-hover:translate-x-2 transtion-all durartion-300 text-main '>Back</span>
    </button>
  )
}
