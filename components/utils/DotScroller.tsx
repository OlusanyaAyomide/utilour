'use client'
import { cn } from '@/lib/utils'
import React, { useEffect, useRef, useState } from 'react'

interface IDotScroller{
    children:React.ReactNode,
    className?:string
    style?:string
    ngClass?:string
}
export default function DotScroller({children,className,style,ngClass}:IDotScroller) {
    const [divWidth,setDivWidth] = useState<number>(0)
    const [innerwidth,setInnerWidth] = useState<number>(0)
    const divref = useRef<HTMLDivElement>(null)
    const innerrRef = useRef<HTMLDivElement>(null)
    const [scrollPercent,setScrollPercent] = useState<number>(0)
    const [showDot,setShowDot] = useState<number>(1)
    // console.log(scrollPercent,"percent")


    const handleResize = ()=>{
        const width = divref.current?.clientWidth
        if(width){
            setDivWidth(width)
        }
    }  

    const scrollToPixel = (scrollTo:number)=>{
        if(divref.current){
            divref.current.scrollLeft = scrollTo
        }
    }

    useEffect(()=>{
        window.addEventListener("resize",handleResize)
        handleResize()
        const width = innerrRef.current?.clientWidth
        if(width){
            setInnerWidth(width)
        }
    
        return ()=>{
            window.removeEventListener("resize",handleResize)
        }
    },[])

    // const handleScroll = ()=>{
    //     const scroll = divref.current
    //     if(scroll){
    //         const scrollWidth = scroll.scrollWidth - scroll.clientWidth
    //         const scrolled = scroll.scrollLeft
    //         const percentage = (scrolled/scrollWidth)*100
    //         setScrollPercent(percentage)
    //         // const test = (((percentage/100)*scroll.clientWidth) + (scrolled/scrollWidth))/10
    //         // setScrollPercent(test)


    //         // console.log((percentage/100)*scroll.clientWidth)
    //     }
    // }

    const dotNumber = Math.ceil(innerwidth/divWidth)
    const dotsArray = Array.from({length:dotNumber},(_,index)=>index + 1)

    return (
    <>
        <div className={cn('overflow-auto hide-scroll w-full',className)} ref={divref}>
            <div className="w-fit" ref={innerrRef}>{children}</div>
        </div>
        <div className={cn("flex-center mx-auto w-fit",style)}>
            {dotNumber > 1 && dotsArray.map((item,key)=>{
                return (<button onClick={()=>{
                    scrollToPixel(divWidth*(item-1));
                    setShowDot(item)}}
                className={cn(`mr-3 rounded-full border ${showDot === item?"bg-main":""} mt-3 h-[10px] border border-main w-[10px]`,ngClass)} key={key}></button>)
            })}
        </div>
    </>

  )
}
