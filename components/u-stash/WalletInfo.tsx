'use client'
import React from 'react'
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Icons } from '@/utils/Icons';
import { useCustomToast } from '../utils/useCustomToast';

export default function WalletInfo({accountName,uId}:{accountName:string,uId:string}) {
    const toast = useCustomToast()
  return (
    <div className='flex sm:items-center max-sm:flex-col mt-1 sm:mt-4 text-white'>
        <div className="max-sm:mb-1 sm:mr-5">
            <h1>Utilor ID</h1>
            <h1 className=" mt-[2px] flex-center">
                <span className='text-base sm:text-lg font-semibold'>{uId}</span>
                <CopyToClipboard text={uId} onCopy={()=>{toast("good",`${uId} copied to clipboard`)}}>
                    <button className='ml-2'><Icons.copy className = "text-xl text-white"/></button>
                </CopyToClipboard>
            </h1>
        </div>
        <div>
            <h1>Account Name</h1>
            <h1 className="font-semibold mt-[2px] flex-center">
                <span className='text-base sm:text-lg font-medium'>{accountName}</span>
            </h1>
        </div>
    </div>
  )
}
