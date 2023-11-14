import React from 'react'
import SectionCard from './SectionCard'
import { Icons } from '@/utils/Icons'

export default function SaveHero() {
  return (
    <>
    <div className='flex-center pl-3 lg:pl-8 mt-2 lg:mt-4 mb-4 text-shade max-lg:text-center text-2xl lg:text-3xl font-semibold'>
        <span>Save In Naira</span>
    </div>
    <div className='mt-3 text-white mx-2 object-center sm:mx-6 px-2 py-6 h-[200px]  sm:h-[220px] xs:h-[210px] rounded-3xl bg-deepPurple'>
        <div className='mt-6'>
            <h1 className='text-white font-medium mb-2'>Total Available Balance</h1>
            <h1 className='font-bold text-3xl sm:text-4xl text-white'>₦ 200,000.00</h1>
        </div>
    </div>
    <div className="-mt-5 px-3 sm:px-10 lg:px-8 flex flex-col md:flex-row">
        <div className="w-full md:w-6/12 max-md:mb-6 md:pr-3">
            <SectionCard title='U Save'content='mock contents probably a short description on u save for better user understanding on what the navigation is about' Icon={Icons.vault} showGradient />
        </div>
        <div className="w-full md:w-6/12 md:pl-3">
            <SectionCard title='U Bugga'content='mock contents probably a short description on u bugga for better user understanding on what the navigation is about' Icon={Icons.flower} showGradient />
        </div>
    </div>
    </>

  )
}
