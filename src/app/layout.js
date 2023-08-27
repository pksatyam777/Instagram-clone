import Header from './components/Header'
import Providers from './components/Providers'
import './globals.css'
import { Inter } from 'next/font/google'



export const metadata = {
  title: 'Instagram App',
  description: 'Instagram App created by satyam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="insta.svg"></link>
        {/* https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png */}
      </head>
      <body className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <Providers>
        
        {children}
        </Providers>
        </body>
    </html>
  )
}
