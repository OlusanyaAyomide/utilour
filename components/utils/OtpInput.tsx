'use client'

import React, { useState } from 'react'
import ReactOtp from "react-otp-input";

import { Button } from '../ui/button';


interface IOtpInput{
    action:(pin:string)=>void
    header:string
    buttonText?:string
    email:string


}


export default function OtpInput({action,header,buttonText,email}:IOtpInput) {

    const [inputPin,setInputPin] = useState<string>("")

    const handleChange = (value:string)=>{
        console.log(value)
        if(value ===""){setInputPin("");return}
        const isNumber = /^[0-9]+$/.test(value)
        if(!isNumber){return}
        console.log(value.length)
        setInputPin(value)
        if(value.length === 4){
            console.log("here")
            action(value)
        }
    }

    return (
    <div>
        <h1 className="text-2xl text-main text-center mb-6">Email Verification</h1>
        <h1 className="text-main text-center text-sm font-medium">{header}</h1>
        <h1 className="text-center font-semibold">{email}</h1>
        <div className="mt-5 w-fit mx-auto">
        <ReactOtp
              inputType="tel"
              value={inputPin}
              onChange={handleChange}
              containerStyle="flex space-x-2 sm:space-x-5"
              numInputs={4}
              inputStyle={{width:"52px",height:"52px",outline:"none",
              border:"2px solid #C6F1EF",backgroundColor:"#f6fcfd",fontWeight:"bold",borderRadius:"14px"
            }}
              renderSeparator={<span className='mr-2'></span>}
              renderInput={(props:any) => <input inputMode="numeric"  {...props} />}
            />
        </div>
        
    </div>
  )
}
