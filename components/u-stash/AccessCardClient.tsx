'use client'
import React from 'react'
import { Icons } from '@/utils/Icons'
import AccessCard from '../home/AccessCard'
import DotScroller from '../utils/DotScroller'

export default function AccessCardClient() {
  return (
    <DotScroller ngClass='md:hidden'>
        <div className="sm:ml-5 md:ml-3 mt-3 max-md:flex  max-md:justify-between max-md:px-4">
            <AccessCard 
                Icon={Icons.wallet}
                className='bg-[#aa1dfc50] md:mb-6'
                text='Fund U Stash'
                ngClass='text-[#aa1dfc]'
                onClick={()=>{}}
            />
            <AccessCard 
                Icon={Icons.withdraw}
                className='bg-[#fff34460] md:mb-6'
                text='Withdraw'
                ngClass='text-[#fff344]'
                onClick={()=>{}}
            />
            <AccessCard 
                Icon={Icons.transfer}
                className='bg-[#4caf5050] md:mb-6'
                text='Send'
                ngClass='text-[#4caf50]'
                onClick={()=>{}}
            />
        </div>

    </DotScroller>
  )
}
