import AccessCard from '@/components/home/AccessCard'
import AccessCardClient from '@/components/u-stash/AccessCardClient'
import TransactionList from '@/components/u-stash/TransactionList'
import UserBalance from '@/components/u-stash/UserBalance'
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
        <div className='md:flex'>
            <UserBalance dollarAmount='3,000 USD' accountName={`${user.firstName} ${user.lastName}`} nairaAmount='80,000 NGN' uId={user.merchantID}/>
            <AccessCardClient/>
        </div>
        <TransactionList/>
    </div>
  )
}
