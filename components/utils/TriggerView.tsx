'use client'

import { useInView } from "react-intersection-observer"

interface ITriggerView{
    children:React.ReactNode
    className?:string
    initial?:string
    active?:string
    triggerOnce?:boolean
}
export default function TriggerView({children,className,initial,active,triggerOnce=true}:ITriggerView) {
    const {ref,inView,entry} = useInView({threshold:0.25
        ,triggerOnce})
    return (
    <div className={`${className} ${(entry && inView)?active:initial}`} ref={ref}>
        {children}
    </div>
  )
}
