import { toast } from "../ui/use-toast"


export const useCustomToast = ()=>{
    const styles={
        bad:"border-red-500/50 bg-[#f7080846] border",
        good:"border-green-500/50 bg-[#40f70846] border",
        session:"border-yellow-500 "
    }
    const toaster = (type:"bad"|"good"|"session",text:string,duration?:number)=>{
        toast({
            duration:duration || 5000,
            description:text,
            className:`${styles[type]}  text-base fixed top-2 whitespace-nowrap font-medium backdrop-blur-sm py-4 max-w-[350px] bg-transparent`
        })
    }
    return toaster
}