import { Button } from '@/components/ui/button'
import { useMutateData } from '@/hooks/useMutateData'
import { useEmailVerification } from '@/store/useEmailverifcation'
import React,{useEffect, useState} from 'react'

export default function VerifyButton() {
    const {isCountingDown,setIsCountingDown} = useEmailVerification()
    const [count,setCurrentCount] = useState(59)
    const {mutate} = useMutateData({url:"/api/user/resendtoken"})

    useEffect(()=>{
        if(!isCountingDown){return}
        if(count > 0){
            setTimeout(()=>{
                setCurrentCount((prev=>prev-1))
            },1000)
        }else{
            setIsCountingDown(false)
        }

    },[isCountingDown,count])
    return (
    <Button onClick={()=>{
        setIsCountingDown(true)
        setCurrentCount(59)
        mutate({})
    }}
     size={"lg"} disabled={isCountingDown} className='w-full  text-white bg-main hover:bg-main hover:brightness-110 mt-8'>
        {isCountingDown?`Retry in ${count}`:"Send Email Verification"}
    </Button>
  )
}
