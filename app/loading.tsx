import React from 'react'

export default function Loader() {
  return (
    <div className="h-screen grid place-content-center">
        <div>
            <div className="rounded-full border animate-spin w-16 h-16 duration-1000 border-b-transparent border-purple-700">
        </div>
          <h1 className='text-center text-purple-700 mt-2 text-base animate-pulse'>Utilor</h1>
          
        </div>
    </div>
  )
}
