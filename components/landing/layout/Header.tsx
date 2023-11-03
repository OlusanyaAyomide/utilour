import React from 'react'
import HeaderView from './HeaderView'
import Logo from '../../utils/Logo'
import {NavigationMenu,NavigationMenuContent,NavigationMenuIndicator,NavigationMenuItem,NavigationMenuLink,NavigationMenuList,NavigationMenuTrigger,NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { headerLinks, navItems } from '@/utils/constants'
import { Button } from '../../ui/button'
import MenuBar from './MenuBar'

export default function Header() {
  return (
    <HeaderView className='flex-center z-40 py-2 max-md:justify-between landing-padding fixed w-full top-0 left-0'>
        <Logo className='ml-r sm:mr-4 relative z-40'/>
        <div className="grow flex-center max-md:hidden lg:px-4 text-main">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='bg-transparent lg:mr-4'>
                            <span className='mr-0 font-semibold lg:text-base text-[15px]'>Invest</span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className='py-2 px-2 rounded-lg'>
                            <div className="w-[500px] flex flex-wrap">
                                {headerLinks.map((item,key)=>(
                                    <Link href={"/"} key={key} className='block  w-6/12'> 
                                        <div className={`${key%2===0?"pr-2":"pl-2"} hover:bg-accent py-1 cursor-pointer px-2 rounded-sm`}>
                                        <h1 className="font-medium  text-sm mb-[2px]">{item}</h1>
                                        <h1 className="text-shade text-xs">
                                            Lorem ipsum dolor sit amet consecteturt....
                                        </h1>
                                    </div>
                                    </Link>
                                ))}
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>  
            </NavigationMenu>
            {navItems.map((item,key)=>(
                <Link className='font-semibold hover:text-main-foreground  mr-6 lg:mr-12 text-[15px] lg:text-base' key={key} href={item.link}>{item.text}</Link>
            ))}
        </div>
        <div className="shrink-0 flex-center">
            <div className='flex-center max-md:mr-2 relative z-40'>
                <Link href={"/user/signin"}>
                     <Button className='border-primary max-sm:hidden mr-3 px-7 rounded-2xl' variant={'outline'}>Login
                     </Button>
                </Link>
                <Link href={"/user/signup"}>
                    <Button className='text-white px-7  hover:text-white  rounded-2xl '>Signup</Button>
                </Link>
            </div>
            <MenuBar/>
        </div>
    </HeaderView>
  )
}
