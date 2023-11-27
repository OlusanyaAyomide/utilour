import { redirect } from 'next/navigation'

interface CatchAsyncResult<T> {
    error: boolean;
    message?: string;
    data?: T;
  }
  
export default function catchAsync<T, A>(innerFunction: (args: A) => T):(args: A) => Promise<CatchAsyncResult<T>> {
    return (args: A) => new Promise<CatchAsyncResult<T>>(async (resolve) => {
      try {
        const data = await innerFunction(args) as any;
        if(data.redirect){
            console.log("inside")
            return redirect(data,data.path)
        }
        console.log(data,"heree")
        resolve({ error: false, data:data as T });
      } catch (error:any) {
        console.log(error)
        resolve({ error: true, message: error.errors[0] || error.message || "Unknown error occured" });
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
 

 



  