import type { Metadata } from 'next'
// import { Inter  } from "next/font/google"
import './globals.css'
import { TailwindIndicator } from '@/components/utils/TailwindIndicator'
import ClientProvider from '@/components/utils/ClientProvider'



 
// const inter = Inter({ subsets: ['latin'] })
 

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" type="image/svg+xml" href="/logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        </head>
        <body className='max-w-[1300px] mx-auto'>
            <ClientProvider>
                {children}
            </ClientProvider>
            <TailwindIndicator/>
        </body>
    </html>
  )
}
