import React from 'react'
import {Tabs,TabsList,TabsTrigger,TabsContent} from "@/components/ui/tabs"
import Analytics from './u-save/Analytics'

export default function SaveStats() {
  return (
    <div className='mt-6'>
        <h1 className="text-center font-mediun text-[15px] mb-4">How you are doing</h1>
        <Tabs className=' ' defaultValue='foru'>
            <TabsList className='mb-8 max-sm:h-fit max-w-[800px] flex flex-wrap w-full mx-auto'>
                <TabsTrigger className='max-sm:mb-1 border-r w-6/12 sm:w-3/12' value="foru">For you</TabsTrigger>
                <TabsTrigger className='max-sm:mb-1 sm:border-r w-6/12 sm:w-3/12' value="uandi">You And I</TabsTrigger>
                <TabsTrigger className='max-sm:mb-1 border-r w-6/12 sm:w-3/12' value="emergency">Emergency</TabsTrigger>
                <TabsTrigger className='max-sm:mb-1  w-6/12 sm:w-3/12' value="ajo">Ajo</TabsTrigger>
            </TabsList>
            <TabsContent value='foru' className=''>
                <Analytics/>
            </TabsContent>
            <TabsContent value='uandi' className=''>
                <Analytics/>
            </TabsContent>
            <TabsContent value='emergency' className=''>
                <Analytics/>
            </TabsContent>
            <TabsContent value='ajo' className=''>
                <Analytics/>
            </TabsContent>
        </Tabs>
    </div>
  )
}
