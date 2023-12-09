"use client";

import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster"
import { GoogleOAuthProvider } from '@react-oauth/google'
import { oauthKey } from '@/utils/constants';


export default function ClientProvider({ children }: { children: React.ReactNode }) {
    const [client] = useState(new QueryClient())
     return (
        <QueryClientProvider client={client}>
            <GoogleOAuthProvider  clientId={oauthKey}>
                {children}
                <Toaster/>
            </GoogleOAuthProvider>

        </QueryClientProvider>
  )
}
