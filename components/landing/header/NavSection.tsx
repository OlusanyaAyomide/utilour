import React from 'react'
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger,
  } from "@/components/ui/accordion"
import { headerLinks } from '@/utils/constants'
import { navItems } from '@/utils/constants'
import Link from 'next/link'

export default function NavSection() {
  return (
    <div className='mb-10 h-full py-[16%] md:hidden flex text-main flex-col justify-between text-2xl w-[200px] pt-20 mx-auto font-semibold animate-fadeUp'>
        <Accordion type='multiple'>
            <AccordionItem value='invest' className='border-b-0'>
                <AccordionTrigger className='w-[200px] mb-1 flex justify-center  hover:no-underline border-b-0'>
                    <h1 className='text-center hover:text-primary mr-3'>Invest</h1>
                </AccordionTrigger>
                <AccordionContent >
                    {headerLinks.map((item,key)=>(
                        <h1 className="py-1 font-semibold  hover:font-bold rounded-md hover:bg-accent px-2 text base capitalize"key={key}>
                            <Link href={"/"}>{item}</Link>
                        </h1>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        {navItems.map((item,key)=>(
            <h1 className='text-center hover:font-bold hover:text-primary mb-2 capitalize' key={key}>
                <Link href={item.link}>{item.text}</Link>
            </h1>
        ))}
    </div>
  )
}
