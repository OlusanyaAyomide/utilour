import React from 'react'
import BalanceCard from '../../utils/BalanceCard'
import SectionCard from '../SectionCard'
import { Icons } from '@/utils/Icons'

export default function UBuggaHero() {
  return (
    <div className='pb-10'>
        <div className='flex-center  pl-3 lg:pl-8 mt-2 lg:mt-4 mb-4 text-shade max-lg:text-center text-xl xs:text-2xl lg:text-3xl font-semibold'>
            <span>U Bugga - Saving in Dollar</span>
        </div>
        <BalanceCard amount='$ 10,000.00' description='Available Balance on U Save' imageCode='US'/>
        <div className="-mt-5 px-3 sm:px-10 lg:px-8 flex flex-wrap md:flex-row">
            <div className="w-full md:w-6/12 mb-6 md:pr-3">
                <SectionCard title='For U'content='Create a new plan' Icon={Icons.vault} showGradient>

                </SectionCard>
            </div>
            <div className="w-full md:w-6/12 mb-6 md:pl-3">
                <SectionCard title='U And I'content='Create a couple plan with your partner or best friend' Icon={Icons.flower} showGradient>

                </SectionCard>
            </div>
            <div className="w-full md:w-6/12 mb-6 md:pr-3">
                <SectionCard title='Emergency Savings'content='Create a Plan for emergency' Icon={Icons.vault} showGradient>

                </SectionCard>
            </div>
            <div className="w-full md:w-6/12 md:pl-3">
                <SectionCard title='AJO'content='Create a group of 3,6,9 to 12 people' Icon={Icons.flower} showGradient>

                </SectionCard>
            </div>
        </div>
    </div>
  )
}
