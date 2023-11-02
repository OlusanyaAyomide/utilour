'use server'

import { ISignUpForm } from "@/interfaces/client-interface";

export async  function A_SignUpUser(data:ISignUpForm){
    console.log(data)
}