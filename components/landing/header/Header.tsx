import React from 'react'
import HeaderView from './HeaderView'
import Logo from '../../utils/Logo'
import {NavigationMenu,NavigationMenuContent,NavigationMenuIndicator,NavigationMenuItem,NavigationMenuLink,NavigationMenuList,NavigationMenuTrigger,NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { navItems } from '@/utils/constants'
import { Button } from '../../ui/button'
import MenuBar from './MenuBar'

export default function Header() {
  return (
    <HeaderView className='flex-center py-2 max-md:justify-between landing-padding fixed w-full top-0 left-0'>
        <Logo className='ml-r sm:mr-4 relative z-40'/>
        <div className="grow flex-center max-md:hidden lg:px-4 text-main">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='bg-transparent lg:mr-4'>
                            <span className='mr-0 font-semibold  text-[15px]'>Invest</span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className='py-2 px-2 rounded-lg'>
                            <div className="w-[200px]">
                                <h1 className="text-center mb-2 w-[]">
                                    <Link href={"/"}>place holder1</Link>
                                </h1> 
                                <h1 className="text-center mb-2">
                                    <Link href={"/"}>place holder2</Link>
                                </h1> 
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>  
            </NavigationMenu>
            {navItems.map((item,key)=>(
                <Link className='font-semibold  mr-6 lg:mr-12 text-[15px] lg:text-base' key={key} href={item.link}>{item.text}</Link>
            ))}
        </div>
        <div className="shrink-0 flex-center">
            <div className='flex-center max-md:mr-2 relative z-40'>
                <Button className='border-primary max-sm:hidden mr-3 px-7 rounded-2xl' variant={'outline'}>Login</Button>
                <Button className='text-white px-7 rounded-2xl'>Login</Button>
            </div>
            <MenuBar/>
        </div>

    </HeaderView>
  )
}
