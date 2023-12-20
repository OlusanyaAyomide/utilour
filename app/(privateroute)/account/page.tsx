import BankList from '@/components/account/BankList'
import NextOfKin from '@/components/account/NextOfKin'
import ProfileInfo from '@/components/account/ProfileInfo'
import TabGroup from '@/components/account/TabGroup'
import Verification from '@/components/account/Verification'
import { getSession } from '@/utils/server/util'
import React from 'react'

export default async function Account() {
  const user = await getSession()
  return (
    <div>
        <TabGroup
            account={<ProfileInfo {...user}/>}
            verification={<Verification/>}
            bank={<BankList/>}
            nextOfKin={<NextOfKin/>}
        />
    </div>
  )
}
