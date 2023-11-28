import { redirect } from 'next/navigation'
import { isRedirectError } from "next/dist/client/components/redirect"

interface CatchAsyncResult<T> {
    error: boolean;
    message?: string;
    data?: T;
  }
  
export default function catchAsync<T, A>(innerFunction: (args: A) => T):(args: A) => Promise<CatchAsyncResult<T>> {
    return (args: A) => new Promise<CatchAsyncResult<T>>(async (resolve) => {
        let redirectString = null
        try {
          const data = await innerFunction(args) as any;

          console.log(data,"heree")
          resolve({ error: false, data:data as T });
        } catch (error:any) {
        if(isRedirectError(error)){
            console.log("Redirect triggered")
            // console.log(error)
            // console.log(Object.keys(error))
            // console.log(error.digest,)
            // console.log(error.message,)
            console.log("triggered")
            const errorString = error.digest
            const pattern =  /NEXT_REDIRECT;replace;([^;]+);false/
            const match = errorString.match(pattern)
            if(match){
                const redirectUrl = match[0]
                console.log(redirectUrl,"checkingg")
                redirectString = redirectUrl
                // redirect(redirectUrl)
                // console.log(match)
            }
            // return resolve({error:true})
        }else{
            resolve({ error: true, message: error?.errors[0] || error.message || "Unknown error occured" });
        }
      }finally{
        if(redirectString){
            console.log("final redirect",redirectString)
            redirect(redirectString)
        }
      }
    });
}


// a duplicate of catchAsync is created for functions that requires server redirect,nextjs redirect can not be used in try/catch block
export  function redirectAsync<T, A>(innerFunction: (args: A) => T):(args: A) => Promise<CatchAsyncResult<T>> {
    return (args: A) => new Promise<CatchAsyncResult<T>>(async (resolve) => {
      const data = await innerFunction(args) as any;
        if(data.redirect){
            console.log("inside")
            return redirect(data,data.path)
        }
        console.log(data,"heree")
        resolve({ error: false, data:data as T });
      })
}
 

 



  