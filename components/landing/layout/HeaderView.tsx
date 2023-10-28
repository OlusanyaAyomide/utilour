'use client'
import { cn } from '@/lib/utils'
import { useHomeLayout } from '@/store/useHomeLayout'
import React,{useEffect,useState} from 'react'
interface IHeaderView{
    children:React.ReactNode
    className?:string
}

export default function HeaderView({children,className}:IHeaderView) {
    // const [isScrolled,setIsScrolled] = useState(false)
    const {isScrolled,setIsScrolled}  = useHomeLayout()

    const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
    };

    useEffect(()=>{
          window.addEventListener("scroll",handleScroll) 
          return ()=>{window.removeEventListener("scroll",handleScroll)}
    },[])
    return (
    <div className={cn(`${isScrolled?"bg-white shadow-sm":"bg-page"}`,className)}>{children}</div>
  )
}
