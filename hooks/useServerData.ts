import { useTransition } from "react"

interface CatchAsyncResult<T> {
    error: boolean;
    message?: string;
    data?: T;
}
  
export type serverAction= (args:any) => Promise<CatchAsyncResult<Promise<any>>>

export default function useServerData(action:serverAction){
    const [pending,startTransition] = useTransition()

    
    const getData = <T>(data:any):Promise<T>=>{
        return(
            new Promise((resolve)=>{
                startTransition(async()=>{
                    // try{
                    const result = await action(data)
                    if(result.data){
                        resolve(result.data as T)
                    }
                    else{
                        console.log("An error as occured from custom")
                        }
                    // }
                    // catch(err:any){
                    //     if(err.message === 'Failed to fetch'){
                    //         console.log("network error")
                    //     }
                    // }
 
                })
            })
        )
    }
    return {pending,getData}
}