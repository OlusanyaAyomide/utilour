import Activities from '@/components/home/Activities'
import HeroSection from '@/components/home/HeroSection'
import DotScroller from '@/components/utils/DotScroller'
import SectionView from '@/components/utils/SectionView'
import React from 'react'

export default function DashBoard() {
  return (
    <div>
        <SectionView text='Oluwatobi Johnson' header='Welcome Back'/>
        <div className="px-2 sm:px-3">
            <HeroSection/>
            <Activities/>
        </div>

    </div>
  )
}
