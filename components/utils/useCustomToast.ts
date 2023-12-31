import { toast } from "../ui/use-toast"

// bg-[#87f7089c]
export const useCustomToast = ()=>{
    const styles={
        bad:"border-red-500/50 text-white bg-red-500 border",
        good:"border-green-500/50 text-gray-900 bg-transparent border",
        session:"border-yellow-500 bg-transparent"
    }
    const toaster = (type:"bad"|"good"|"session",text:string,duration?:number)=>{
        toast({
            duration:duration || 5000,
            description:text,
            className:`${styles[type]}  text-base fixed top-2 whitespace-nowrap font-medium backdrop-blur-sm py-4 max-w-[350px]`
        })
    }
    return toaster
}
