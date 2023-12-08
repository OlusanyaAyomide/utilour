import React from 'react'
import { Icons } from '@/utils/Icons'
export default function CloseButton() {
  return (
        <button className='h-9 w-9 group hover:border-border  grid place-content-center rounded-full'>
            <Icons.close className = "text-shade group-hover:text-main text-xl"/>
        </button>
  )
}
