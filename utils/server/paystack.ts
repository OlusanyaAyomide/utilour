import axios,{InternalAxiosRequestConfig,AxiosResponse, AxiosError, AxiosRequestConfig, AxiosInstance} from "axios"



// Intercepting all axios paystack and adding cookies to headers if it exists
const onRequest=(config:InternalAxiosRequestConfig):InternalAxiosRequestConfig=>{
  const {method,url} = config
  const token = process.env.PAYSTACK_SECRET as string
    config.headers["Authorization"] = `Bearer ${token}`
    return config
}
const onResponse = (response:AxiosResponse):AxiosResponse=>{
  return response
}

const onErrorResponse = (error:AxiosError|Error):Promise<AxiosError>=>{
  if (axios.isAxiosError(error)){
    const {message} = error
    const {method,url} = error.config as AxiosRequestConfig
    const {statusText,status} = error.response as AxiosResponse ?? {}
    console.log(`${method?.toUpperCase()} ${url} | Error ${status} ${message}`)
    if (status===401){console.log("LogIn Required")}
  }
  // throw new Error(error.message)
  return Promise.reject(error)
}



const paystack = axios.create({
  baseURL:"https://api.paystack.co",
  headers:{
    "Content-Type":"application/json"
  }
})
paystack.interceptors.request.use(onRequest,onErrorResponse)
paystack.interceptors.response.use(onResponse,onErrorResponse)


export default paystack
