import Header from '@/components/landing/header/Header'
import React from 'react'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='pt-20 h-[200vh]'>
        <Header/>
    </div>
  )
}
