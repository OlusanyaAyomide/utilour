import { Typography } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'

export default function Unleash() {
  return (
    <div className='mt-20'>
        <h1 className="header text-center mt-3 mb-1">{Typography.unleashHeader}</h1>
        <h1 className="text-shade text-center">{Typography.unleashBase}</h1>
        <div className="mx-auto max-w-[600px]  relative h-[230px] sm:h-[400px]">
            <Image src={'/trial.jpg'} alt='utilor-image' fill className='object-contain h-full w-full' />
        </div>
    </div>
  )
}
