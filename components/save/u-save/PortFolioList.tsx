import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { mockPortfolios } from '@/utils/constants'
import React from 'react'

const MinBadge = ({title,content,className}:{title:string,content:string,className?:string})=>(
    <div>
        <div className={cn("rounded- text-shade border border-main w-fit px-4 border-dashed mr-2",className)}>
            <span>{content}</span>
        </div>
        <h1 className="text-xs">{title}</h1>
    </div>

)

export default function PortFolioList(item:typeof mockPortfolios[0]){



    return (
    <div className='px-2 sm:px-3 py-4 rounded-md full-shadow mb-3'>
        <h1 className="flex-center">
            <span className='text-xl sm:text-[22px] font-medium'>{item.name}</span>
            <Badge className='bg-main'>{item.type}</Badge>
        </h1>
        <div className="mt-2">
            <h1 className="text-[13px] text-shade">Initial Deposit</h1>
            <h1 className="text-shade">{item.invested}</h1>
        </div>
        <div className="mt-1 flex flex-wrap">
            <MinBadge title='Deposited' content={item.depositedAt} />
            <MinBadge title='MinDate' content={item.firstWithdrawal} />
            <MinBadge title='Matured' content={item.maturedAt} />
        </div>
        <Button variant={"ghost"} className="block mt-6 mx-auto">
            <span>View Breakdown</span>
        </Button>
    </div>
  )
}
