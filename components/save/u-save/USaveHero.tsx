import React from 'react'
import BalanceCard from '../../utils/BalanceCard'
import SectionCard from '../SectionCard'
import { Icons } from '@/utils/Icons'
import SaveProducts from '@/components/utils/SaveProducts'
import EmergencySaving from './EmergencySaving'
import Savings from './Savings'

export default function USaveHero() {
  return (
    <div className='pb-10'>
        <div className='page-info'>
            <span>U Save - Saving In Naira</span>
        </div>
        <BalanceCard amount='₦ 100,000.00' description='Available Balance on U Save' imageCode='NG'/>
        <div className="-mt-5 px-3 sm:px-10 lg:px-8 flex flex-wrap md:flex-row">
            <div className="w-full md:w-6/12 mb-6 md:pr-3">
                <SectionCard title='For U'content='Create a new plan' Icon={Icons.foru} showGradient >
                    <SaveProducts header='For U' description='Create a new plan' Icon={Icons.foru}>
                       <Savings type="usave" startAmount={50000}/>
                    </SaveProducts>
                </SectionCard>
            </div>
            <div className="w-full md:w-6/12 mb-6 md:pl-3">
                <SectionCard title='U And I'content='Create a couple plan with your partner or best friend' Icon={Icons.shake} showGradient>
                    <SaveProducts header='U And I' description='Create a new plan' Icon={Icons.shake} >
                        <Savings type="usave" startAmount={50000} showPartner/>
                    </SaveProducts>
                </SectionCard>
            </div>

            <div className="w-full md:w-6/12 mb-6 md:pr-3">
                <SectionCard title='Emergency Savings'content='Create a Plan for emergency' Icon={Icons.emergency} showGradient >
                    <SaveProducts header='Emergency Savings' description='Create a  Plan for Emergency' Icon={Icons.emergency} >
                       <EmergencySaving/>
                    </SaveProducts>
                </SectionCard>
            </div>
            
            <div className="w-full md:w-6/12 md:pl-3">
                <SectionCard title='AJO'content='Create a group of 3,6,9 to 12 people' Icon={Icons.ajo} showGradient>
                     <SaveProducts header='AJO' description='Create a group Plan' Icon={Icons.ajo} >
                        <span>Testing</span>
                    </SaveProducts>
                </SectionCard>
            </div>
        </div>
    </div>
  )
}
