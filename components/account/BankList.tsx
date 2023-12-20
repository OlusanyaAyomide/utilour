import { Icons } from '@/utils/Icons'
import { mockAccounts } from '@/utils/constants'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import AddBank from './AddBank'
//bg-deepPurple
export default function BankList() {
  return (
    <div>
        <h1 className="text-shade text-lg mb-2 md:mb-1 sm:text-base mt-2 font-medium max-md:text-center">Registered Accounts</h1>
        <div className="flex flex-wrap max-md:justify-center">
            {mockAccounts.map((item,key)=>(
                <div key={key} className='w-full text-white pb-3 text-xs mb-5 md:mr-5 max-w-[350px] bg-deepPurple px-2 py-1 rounded-lg'>
                    <div className={`flex items-center mt-2 ${item.default?"justify-between":"justify-end"} `}>
                        {item.default &&  <span>Default</span>}
                        <button className='p-1'>
                            <Icons.trash className = "text-white text-lg" />
                        </button>
                    </div>
                    <div className="flex-center mt-3">
                        <Avatar className='shrink-0'>
                            <AvatarImage src={item.bankLogo} className='bg-white h-11 w-11'></AvatarImage>
                            <AvatarFallback>Ul</AvatarFallback>
                        </Avatar>
                        <h1 className="ml-2 grow uppercase">{item.bankName}</h1>
                    </div>
                    <h1 className="mt-3">{item.name}</h1>
                    <h1 className="mt-3 font-medium text-[15px]">{item.AccountNumber}</h1>
                </div>
            ))}
        </div>
        <AddBank/>
    </div>
  )
}
