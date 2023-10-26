import { create } from "zustand";




export interface IUseHomeLayOut{
    isScrolled:boolean
    isTriggered:boolean
    setIsScrolled:(val:boolean)=>void
    setIsTriggered:(val:boolean)=>void
    
}


export const useHomeLayout =create<IUseHomeLayOut>((set)=>({
    isScrolled:false,
    isTriggered:false,
    setIsScrolled:(val)=>{
        set((state)=>({
            isScrolled:val 
        }))    
    },
    setIsTriggered:(val)=>{
        set((state)=>({
            isTriggered:val 
        }))  
    }

}))
