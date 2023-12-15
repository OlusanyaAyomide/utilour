import ProfileInfo from '@/components/account/ProfileInfo'
import TabGroup from '@/components/account/TabGroup'
import { getSession } from '@/utils/server/util'
import React from 'react'

export default async function Account() {
  const user = await getSession()
  return (
    <div>
        <TabGroup
            account={<ProfileInfo {...user}/>}
            bank={<span>Bank</span>}
            nextOfKin={<span>next of Kin</span>}
        />
    </div>
  )
}
