import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";


export const authOptions:NextAuthOptions={
    session:{
        strategy:"jwt",
    },
    providers:[
        CredentialsProvider({
            type:"credentials",
            credentials:{},
            async authorize(credentials,req){
                console.log(credentials,"cred")
                console.log(req.body,"req")
                return {id:"abc"}
            }
        })
    ],
} 

const authHandler=NextAuth(authOptions);

export {authHandler as GET,authHandler as POST}