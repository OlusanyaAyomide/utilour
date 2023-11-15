import React from 'react'
import SectionCard from './SectionCard'
import { Icons } from '@/utils/Icons'
import BalanceCard from '../utils/BalanceCard'
import Link from 'next/link'

export default function SaveHero() {
  return (
    <div className=''>
        <div className='flex-center pl-3 lg:pl-8 mt-2 lg:mt-4 mb-4 text-shade max-lg:text-center text-2xl lg:text-3xl font-semibold'>
            <span>Save In Naira</span>
        </div>
        <BalanceCard amount='₦ 200,000.00' description='Total Available Balance'/>
        <div className="-mt-5 px-3 sm:px-10 lg:px-8 flex flex-col md:flex-row">
            <div className="w-full md:w-6/12 max-md:mb-6 md:pr-3">
                <Link href={"/save/u-save"}>
                    <SectionCard title='U Save'content='mock contents probably a short description on u save for better user understanding on what the navigation is about' Icon={Icons.vault} showGradient />
                </Link>

            </div>
            <div className="w-full md:w-6/12 md:pl-3">
                <Link href={"/save/u-bugga"}>
                    <SectionCard title='U Bugga'content='mock contents probably a short description on u bugga for better user understanding on what the navigation is about' Icon={Icons.flower} showGradient />
                </Link>

            </div>
        </div>
    </div>

  )
}
