import { IgoogleResponse } from "@/interfaces/interface"
import axios from "axios"

export const getUserCredentials = async ({token}:{token:string})=>{
    try{
        const userData = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
            {
               headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json'
                } 
            }
            ) 
            if(userData.status === 200){
                return userData.data as IgoogleResponse
            }else{
                return null
        }
        }catch(err){
            return null
        }

}