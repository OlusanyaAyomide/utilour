import React from 'react'
import {HoverCard,HoverCardContent,HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Icons } from '@/utils/Icons'
interface IHeroCard{
    header:string
    price:number | string
    showCurrency?:boolean
}

export default function HeroCard({header,price,showCurrency = true}:IHeroCard) {
  return (
    <div className='w-[250px] grid py-4 mr-4 lg:mr-5 xl:mr-14 place-items-center rounded-md bg-white full-shadow'>
        <div className="w-fit">
            <h1 className="flex-center">
                <span className='text-center font-medium'>{header}</span>
                <HoverCard>
                    <HoverCardTrigger>
                        <span className='cursor-pointer'>
                            <Icons.info className = "text-xl text-shade ml-2"/>
                        </span>   
                    </HoverCardTrigger>   
                    <HoverCardContent side='top' className='bg-white py-1 px-2'>
                        <span>Testing out mock description and content on hero cards</span>
                    </HoverCardContent>
                </HoverCard>  
            </h1>
            <h1 className='text-[22px] text-support font-semibold flex-center'>
                {showCurrency && <span>₦</span>}
                <span className='ml-[2px]'>{price.toLocaleString()}</span>
            </h1>
        </div>
    </div>
  )
}
