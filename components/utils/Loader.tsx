import React from 'react'

export default function Loader() {
  return (
    <div className='h-[300px] w-full grid place-content-center'>
        <div className="flex space-x-4">
            <div className="w-[10px] h-[10px] bg-support rounded-full duration-700 animate-bounce animation-delay-300"></div>
            <div className="w-[10px] h-[10px] bg-support rounded-full duration-700 animate-bounce animation-delay-600"></div>
            <div className="w-[10px] h-[10px] bg-support rounded-full duration-700 animate-bounce animation-delay-900"></div>
      </div>
    </div>
  )
}
