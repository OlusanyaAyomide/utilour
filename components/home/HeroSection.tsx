import React from 'react'
import DotScroller from '../utils/DotScroller'
import HeroCard from './HeroCard'
import AccessCard from './AccessCard'
import { Icons } from '@/utils/Icons'

export default function HeroSection() {
  return (
    <>
        <DotScroller className='flex' style='md:hidden'>
            <div className='mt-8 lg:mt-3 max-lg:mx-auto pb-2  md:justify-between md:w-[95vw] lg:w-fit flex-center'>
                <HeroCard header='Total Revenue' price={2400}/>
                <HeroCard header='Overall perfoarmance' price={"75%"} showCurrency={false}/>
                <HeroCard header='Total referralls' price={24} showCurrency={false}/>
            </div>
        </DotScroller>
        <h1 className="text-shade mt-10 mb-2 font-medium text-xl">Quick Access</h1>
        <DotScroller>
            <div className="flex-center">
                <AccessCard
                    className='bg-[#aa1dfc50]'
                    Icon={Icons.walletS}
                    text='Fund wallet'
                    ngClass='text-[#aa1dfc]'
                    url='/home'
                />
                <AccessCard
                    className='bg-[#00032B50] pr-8'
                    Icon={Icons.bank}
                    text='Invest'
                    ngClass='text-[#00032B]'
                    url='/invest'
                />
                <AccessCard
                    className='bg-[#4caf5050]'
                    Icon={Icons.card}
                    text='Withdraw'
                    ngClass='text-[#4caf50]'
                    url='/withdraw'
                />
            </div>
        </DotScroller>
    </>

  )
}
