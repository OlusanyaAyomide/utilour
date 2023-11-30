import { create } from "zustand";

interface IuseEmailVerification{
    activeEmail:string
    isCountingDown:boolean 
    setActiveEmail:(val:string)=>void
    setIsCountingDown:(val:boolean)=>void
    setStatus:(val:string)=>void
}

export const useEmailVerification = create<IuseEmailVerification>((set)=>({
    activeEmail:"",
    isCountingDown:false,
    //set active user email
    setActiveEmail(val) {
      set((_)=>({
        activeEmail:val
      }))  
    },
    setIsCountingDown(val){
    set((_)=>({
        isCountingDown:val
      }))  
    },
    setStatus(val){
    //set countdown incase user is redirected to verificaton page
    set((_)=>({
        isCountingDown:true,
        activeEmail:val
      }))  
    }
}))