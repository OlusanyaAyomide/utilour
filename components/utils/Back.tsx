'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Icons } from '@/utils/Icons'

export default function Back() {
    const router = useRouter()
    
    return (
    <button className='mb-2 mt-4 z-10 max-lg:hidden left-20 py-1 relative rounded-xl transition-all duration-300 group pr-6 group hover:bg-accent px-2 flex-center ' onClick={()=>{router.back()}}>
        <span className='mr-1'>
            <Icons.angleLeft className = "text-shade group-hover:text-main text-xl"/>
        </span>
        <span className='font-medium group-hover:text-main group-hover:translate-x-2 transtion-all durartion-300 text-main '>Back</span>
    </button>
  )
}
