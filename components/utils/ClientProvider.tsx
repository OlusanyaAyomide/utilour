"use client";

import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster"
export default function ClientProvider({ children }: { children: React.ReactNode }) {
    const [client] = useState(new QueryClient())
     return (
        <QueryClientProvider client={client}>
            {children}
            <Toaster/>
        </QueryClientProvider>
  )
}
