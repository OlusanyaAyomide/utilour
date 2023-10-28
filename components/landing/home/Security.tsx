import TriggerView from '@/components/utils/TriggerView'
import { Icons } from '@/utils/Icons'
import { Typography } from '@/utils/constants'
import React from 'react'

export default function Security() {
  return (
    <div className='mt-16  max-w-[850px] mx-auto'>
        <TriggerView className='opacity-0 max-sm:flex-wrap flex sm:items-center rounded-3xl bg-white py-3 px-1 sm:px-6' active='animate-fadeinView opacity-100'>
            <div className="h-[80px] shrink-0 w-[80px] max-sm:ml-3 rounded-[30%] bg-page grid place-content-center sm:h-[120px] sm:w-[120px]">
                <Icons.lock className = "text-main text-3xl xs:text-4xl sm:text-6xl"/>
            </div>
            <div className="grow pl-3 max-sm:w-full">
                <h1 className="header text-main mb-2 mt-4">{Typography.securityHeader}</h1>
                <h1 className="text-shade">{Typography.securityContent}</h1>
                <h1 className='flex-center mt-1 mb-4 font-medium'>
                    <span className='mr-2'>
                        <Icons.subdirect className ="text-lg"/>
                    </span>
                    <span>{Typography.securityFooter}</span>
                </h1>
            </div>
        </TriggerView>
        <TriggerView className='opacity-0 mt-12' active='animate-fadeinView opacity-100'>
            <h1 className="header mb-4">{Typography.growthHeader}</h1>
            <h1 className="text-shade">{Typography.growthContent}</h1>
            <h1 className='mt-1 font-medium'>Get Insights on growth</h1>
        </TriggerView>
    </div>

  )
}
