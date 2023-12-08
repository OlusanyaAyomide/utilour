'use client'

import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useCustomToast } from './useCustomToast';
import { Icons } from '@/utils/Icons';
import { cn } from '@/lib/utils';

export default function CopyToClipBoard({text,className}:{text:string,className?:string}) {
    const toast = useCustomToast()
  return (
    <CopyToClipboard text={text} onCopy={()=>{toast("good",`${text} copied to clipboard`)}}>
        <button className='ml-2'><Icons.copy className = {cn("text-xl text-white",className)}/></button>
    </CopyToClipboard>
  )
}
