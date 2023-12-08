import AccessCard from '@/components/home/AccessCard'
import AccessCardClient from '@/components/u-stash/AccessCardClient'
import TransactionList from '@/components/u-stash/TransactionList'
import WalletInfo from '@/components/u-stash/WalletInfo'
import BalanceCard from '@/components/utils/BalanceCard'
import { Icons } from '@/utils/Icons'
import { getSession } from '@/utils/server/util'
import React from 'react'

export default async function UStash() {
    const user = await getSession()
  return (
    <div className='px-2 sm:px-3'>
        <div className="page-info">
          <span>U Stash Wallet</span>
        </div>
        <div className='flex max-md:flex-col'>
            <BalanceCard amount='80,000' imageCode='NG' description='Total amount in wallet' className='md:w-full md:max-w-[550px] md:min-w-[480px] max-sm:py-1'>
                <WalletInfo uId={user.merchantID} accountName={`${user.firstName} ${user.lastName}`}/>
            </BalanceCard>
            <AccessCardClient/>
        </div>
        <TransactionList/>
    </div>
  )
}
