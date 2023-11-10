import React from 'react'
import ActivityItem from './ActivityItem'
import VerifiedLevel from './VerifiedLevel'

export default function Activities() {
    
  return (
    <div className='mt-8 flex max-sm:flex-col sm:items-center'>
        <VerifiedLevel className='sm:hidden'/>
        <div className='grow  py-2 max-w-[600px]'>
            <h1 className="text-shade  mb-2 font-medium text-base">Actions required</h1>
            <ActivityItem text='Add or Verify Bvn or Nin'/>
            <ActivityItem text='Complete Account Profile'/>
            <ActivityItem text='Securely add a valid debit card' className='w-[250px]'/>
            <ActivityItem text='Set Up your security question'/>
            <ActivityItem text='Refer your friend and earn ₦2,000'/>
        </div>
        <div className='shrink-0'>
            <VerifiedLevel className='max-sm:hidden'/>
        </div>
    </div>
  )
}
