import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
 
export function withMethods(methods: string[], handler: NextApiHandler) {
  return async function (request: NextApiRequest, response: NextApiResponse) {
    if (!methods.includes(request.method as string)) {
      return response.status(405).json("")
    }
 
    return handler(request, response)
  }
}