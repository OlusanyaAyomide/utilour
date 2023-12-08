import React from 'react'
import SectionCard from './SectionCard'
import { Icons } from '@/utils/Icons'
import BalanceCard from '../utils/BalanceCard'
import Link from 'next/link'

export default function SaveHero() {
  return (
    <div className=''>
        <div className='page-info'>
            <span>Save In Naira</span>
        </div>
        <BalanceCard amount='₦ 200,000.00' description='Total Available Balance'/>
        <div className="-mt-5 px-3 sm:px-10 lg:px-8 flex flex-col md:flex-row">
            <div className="w-full md:w-6/12 max-md:mb-6 md:pr-3">
                <Link href={"/save/u-save"}>
                    <SectionCard disabled={true} percentage='Up to 10% ' title='U Save'content='mock contents probably a short description on u save for better user understanding on what the navigation is about' Icon={Icons.naira} showGradient/>
                </Link>

            </div>
            <div className="w-full md:w-6/12 md:pl-3">
                <Link href={"/save/u-bugga"}>
                    <SectionCard disabled={true} percentage='Up to 5%' title='U Bugga'content='mock contents probably a short description on u bugga for better user understanding on what the navigation is about' Icon={Icons.dollar} showGradient/>
                </Link>

            </div>
        </div>
    </div>

  )
}
