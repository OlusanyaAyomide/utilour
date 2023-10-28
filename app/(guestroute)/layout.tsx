import Header from '@/components/landing/layout/Header'
import React from 'react'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='pt-20 min-h-[200vh]'>
        <Header/>
        <div className='landing-padding pb-20'>{children}</div>
    </div>
  )
}
