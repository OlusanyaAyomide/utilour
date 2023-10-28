import { Typography } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'
import TriggerView from '@/components/utils/TriggerView'

export default function Utilize() {
  return (
    <TriggerView className='mt-24 lg:mt-28 flex items-end flex-wrap opacity-0' active='animate-fadeinView opacity-100'>
        <div className="w-full md:w-7/12 md:pr-2 lg:pr-4">
            <h1 className='max-xs:text-2xl md:text-4xl lg:text-5xl max-sm:text-3xl hero-text max-md:text-center my-4'>{Typography.utilizeHeader}</h1>
            <h1 className="text-shade md:mb-12  text-sm max-md:text-center">{Typography.utlizeContent}</h1>
        </div>
        <div className="w-full md:w-5/12 md:pl-2">
            <div className="max-w-[260px] xs:max-w-[300px] relative sm:max-w-[340px] h-[250px] mx-auto">
                <Image src={'/invest.svg'} className='object-contain' alt='grow-graph' fill/>
            </div>
        </div>
    </TriggerView>
  )
}
