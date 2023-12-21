import BankList from '@/components/account/BankList'
import NextOfKin from '@/components/account/NextOfKin'
import ProfileData from '@/components/account/ProfileData'
import ProfileInfo from '@/components/account/ProfileInfo'
import TabGroup from '@/components/account/TabGroup'
import Verification from '@/components/account/Verification'
import Loader from '@/components/utils/Loader'
import { getSession } from '@/utils/server/util'
import React, { Suspense } from 'react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Account() {
  const user = await getSession()
  return (
    <div>
        <TabGroup
            account={<Suspense fallback={<Loader/>}>
                <ProfileData/>
            </Suspense>}
            verification={<Verification/>}
            bank={<BankList/>}
            nextOfKin={<NextOfKin/>}
        />
    </div>
  )
}
