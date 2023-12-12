'use client'
import React, { useState,useEffect } from 'react'
import { Radio } from 'react-loader-spinner'

export default function NetoworkTracker() {
    const [isDown,setIsDown] = useState(false)
    
    useEffect(()=>{
        let offline:NodeJS.Timeout
        const handleOffline = ()=>{
            offline = setTimeout(()=>{
                setIsDown(true)
            },3000)
        }
        const handleOnline = ()=>{
            setIsDown(false)
            clearTimeout(offline)
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
          window.removeEventListener('online', handleOnline);
          window.removeEventListener('offline', handleOffline);
        };
    },[])

    return <>
        {isDown && <div className='fixed bg-black/20 grid place-content-center inset-0 z-50 backdrop-blur-sm'>
            <div>
                <div className="mx-auto w-fit">
                    <Radio
                        visible={true}
                        height="90"
                        width="90"
                        ariaLabel="radio-loading"
                        wrapperStyle={{}}
                        colors={["#23C4E8","#23C4E8","#23C4E8"]}
                    />
                </div>
                <h1 className="text-center flex-center">
                    <span className='text-xs'>Trying to reconnect</span>
                    <span className='animate-pulse duration-1000'>...</span>
                </h1>
            </div>
        </div>}
    </>
  
}
