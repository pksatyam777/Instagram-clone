import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4">
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
            <Image className="object-contain" layout='fill' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" />
        </div>
        <div className="h-24 w-10 relative lg:hidden cursor-pointer">
            <Image className="object-contain" layout='fill' src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" />
        </div>
        <div className="">
           Middle 
        </div>
        <div className="">
            Right
        </div>
    </header>
  )
}
