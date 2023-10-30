import Hero from '@/components/landing/home/Hero'
import Security from '@/components/landing/home/Security'
import Unleash from '@/components/landing/home/Unleash'
import Utilize from '@/components/landing/home/Utilize'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Utilize/>
      <Security/>
      <Unleash/>
    </div>
  )
}
