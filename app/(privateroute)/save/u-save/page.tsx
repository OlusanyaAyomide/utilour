import SaveStats from '@/components/save/SaveStats'
import USaveHero from '@/components/save/u-save/USaveHero'
import React from 'react'

export default function Usave() {
  return (
    <div className='pad'>
        <USaveHero/>
        <SaveStats/>
    </div>
  )
}
