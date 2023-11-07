import React from 'react'
import Logo from '../utils/Logo'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Icons } from '@/utils/Icons'
import { Avatar, AvatarFallback } from '../ui/avatar'

export default function Header() {
  return (
    <div className='w-full fixed flex-center justify-between top-0 left-0 py-1 bg-page paddingx'>
        <div>
            <Logo className='max-lg:hidden'/>
            <Sheet >
                <SheetTrigger asChild>
                    <Icons.navmenu className ="text-shade text-2xl lg:hidden"/>
                </SheetTrigger>
                <SheetContent className='px-2 max-w-[320px] lg:hidden' side="left">
                    mockContent
                </SheetContent>
            </Sheet>
        </div>
        <span className='text-[13px]'>Dashboard</span>
        <div className='flex-center'>
            <button>
                <Icons.notification className = "text-2xl text-shade"/>
            </button>
            <div className="flex-center mr-[2px] ml-2">
                <Avatar>
                    <AvatarFallback>UL</AvatarFallback>
                </Avatar>
                <button>
                    <Icons.goTriangle className ="relative top-[2px] text-2xl text-shade"/>
                </button>
            </div>
        </div>

    </div>
  )
}
