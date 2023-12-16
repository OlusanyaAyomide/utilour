import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ITabGroup{
    account:React.ReactNode
    nextOfKin:React.ReactNode
    verification:React.ReactNode
    bank:React.ReactNode
}

export default function TabGroup({account,nextOfKin,bank,verification}:ITabGroup) {
  return (
    <div className='px-2 sm:px-3'>
        <div className='flex-center mb-2 text-shade max-lg:text-center text-xl xs:text-2xl lg:text-3xl font-semibold'>
            <span>Set Up Account</span>
        </div>
        <Tabs defaultValue='account' className=''>
            <div className="w-full overflow-auto max-xs:pb-2 default-scroll">
                <TabsList className='flex  overflow-hidden  border-0 w-fit pb-1 px-0  default-scroll'>
                    <TabsTrigger value='account' className='py-2  border-r px-6 w-[150px]   data-[state=active]:bg-support data-[state=active]:text-white'>Account</TabsTrigger>
                    <TabsTrigger value='verification' className='py-2  border-r px-6 w-[150px]  data-[state=active]:bg-support data-[state=active]:text-white'>Verification</TabsTrigger>
                    <TabsTrigger value='nextOfKin' className='py-2  px-6 w-[150px]  border-r data-[state=active]:bg-support data-[state=active]:text-white'>Next Of Kin</TabsTrigger>
                    <TabsTrigger value='bank' className='py-2 w-[150px]   data-[state=active]:bg-support data-[state=active]:text-white'>bank</TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value='account'>
                    {account}
            </TabsContent>
            <TabsContent value='verification'>
                    {verification}
            </TabsContent>
            <TabsContent value='nextOfKin'>
                {nextOfKin}
            </TabsContent>
            <TabsContent value='bank'>
                {bank}
            </TabsContent>
        </Tabs>

    </div>
  )
}
