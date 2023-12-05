import Activities from '@/components/home/Activities'
import HeroSection from '@/components/home/HeroSection'
import DotScroller from '@/components/utils/DotScroller'
import SectionView from '@/components/utils/SectionView'
import { getSession } from '@/utils/server/util'
import React from 'react'

export default async function DashBoard() {
  const user = await getSession()
  return (
    <div>
        <SectionView text={`${user.firstName} ${user.lastName}`} header='Welcome Back'/>
        <div className="px-2 sm:px-3">
            <HeroSection/>
            <Activities/>
        </div>

    </div>
  )
}
