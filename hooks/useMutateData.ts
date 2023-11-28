import { useCustomToast } from '@/components/utils/useCustomToast';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse ,AxiosError} from "axios"

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

    return useMutation({
        mutationKey:["post-request"],
        mutationFn:(body:any)=>{
            return fetcher({url,body})
        },
        onSuccess:({data}:AxiosResponse<any>)=>{
            console.log(data)
            if(data.status === 200){
                if(successText){
                    toaster("good",successText)
                }
                onSuccess(data.data)
            }
            if(data.status === 400){
                if(showError){
                    toaster("bad",data.error)
                }
            }

        },
        onError(res:AxiosError<any>){
            console.log(res)
            onError(res.message)   
        }
    })

}