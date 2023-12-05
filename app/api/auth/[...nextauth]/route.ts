import NextAuth from "next-auth/next";
import { authOptions } from "@/utils/server/authOptions";



const authHandler=NextAuth(authOptions);

export {authHandler as GET,authHandler as POST}