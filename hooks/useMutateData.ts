import { useCustomToast } from '@/components/utils/useCustomToast';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse ,AxiosError} from "axios"
import { useRouter } from 'next/navigation';

interface ImutateData{
    showError?:boolean
    url:string,
    onSuccess?:(data:any)=>void
    onError?:(err:any)=>void
    successText?:string
   
}

const fetcher = ({body,url}:{body:string,url:string})=>{
    return axios.post(url,body,{
        headers:{
            "Content-Type":"application/json"
        }
    })
}

export function useMutateData<T>({showError=true,url,onError=()=>{},onSuccess=()=>{},successText}:ImutateData){

    const toaster =useCustomToast()
    const router = useRouter()
    
    return useMutation({
        mutationKey:["post-request"],
        mutationFn:(body:any)=>{
            return fetcher({url,body})
        },
        onSuccess:(data:AxiosResponse<any>)=>{
            console.log(data)
            if(data.status === 200){
                if(successText){
                    toaster("good",successText)
                }
                onSuccess(data.data)
            }
            if(data.status === 400){
                if(showError){
                    toaster("bad",data.data?.error)
                }
            }
            if(data.status === 401){
                toaster("bad","Please log in")
                router.push("/user/signin")
            }
            if(data.status === 440){
                toaster("session","Relog in to continue")
                router.push("/user/signin")
            }

        },
        onError(res:AxiosError<any>){
            const error = res.response?.data.error
            if(typeof res.message === "string"){
                toaster("bad",error)
            }
            onError(res.message)   
        }
    })

}