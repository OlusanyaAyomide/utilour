import prismaClient from '@/prisma/client'
import { getSession } from '@/utils/server/util'
import React from 'react'
import ProfileInfo from './ProfileInfo'

export default async function ProfileData() {
    const user = await getSession()
    console.log(user,"user here")
    console.log(user.id)
    const profile = await prismaClient.profile.findUnique({
        where:{
            userId:user.id
        }
    })
    
    console.log(profile)
    const middleName = profile?.middleName
    const gender = profile?.gender
    const DOb = profile?.dateOfBirth as unknown as string | undefined
    const phoneNumber = profile?.phoneNumber
    const countryCode = profile?.countryCode
    const country = profile?.country
    const firstName = user.firstName
    const lastName = user.lastName
    const email = user.email


    return (
        <ProfileInfo
            middleName={middleName}
            gender={gender}
            dateOfBirth={DOb}
            phoneNumber={phoneNumber}
            countryCode={countryCode}
            firstName={firstName}
            lastName={lastName}
            email={email}
            country={country}
        />
  )
}

