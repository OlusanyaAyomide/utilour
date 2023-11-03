interface CatchAsyncResult<T> {
    error: boolean;
    message?: string;
    data?: T;
  }
  
export default function catchAsync<T, A>(innerFunction: (args: A) => T):(args: A) => Promise<CatchAsyncResult<T>> {
    return (args: A) => new Promise<CatchAsyncResult<T>>(async (resolve) => {
      try {
        const data = await innerFunction(args);
        console.log(data,"heree")
        resolve({ error: false, data });
      } catch (error:any) {
        resolve({ error: true, message: error.errors[0] || error.message || "Unknown error occured" });
      }
    });
}
 



  