import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import type { ObjectShape,ObjectSchema } from "yup"
import * as yup from "yup"
import { NextResponse } from "next/server"
import { ICompleteProfile } from "@/interfaces/interface"

// export function withValidation<T extends ObjectSchema<any>>(
//   schema: T,
//   handler: NextApiHandler
// ) {
//   return async function (request: NextApiRequest, response: NextApiResponse) {
//     try {
//       request.body = await schema.validate(request.body)
 
//       return handler(request, response)
//     } catch (error) {
//       if (error instanceof yup.ValidationError) {
//         return NextResponse.json({error:error.message},
//             {status:422})
//         }
 
//         return NextResponse.json({error:"Validation error"},
//             {status:422})
//     }
//   }
// }

// export async function validateData(schema:ObjectSchema<any>,body:any){
//     try{
//         await schema.validate(body)
//         return
//     }catch(err){
//       if (err instanceof yup.ValidationError) {
//         return err  
//         }
//     }
// }

type AnyObject = Record<string, any>;

export async function validateData<T extends AnyObject>(schema:ObjectSchema<T>,body:T){
    try{
        await schema.validate(body)
        return
    }catch(err){
      if (err instanceof yup.ValidationError) {
        return err  
        }
    }
}