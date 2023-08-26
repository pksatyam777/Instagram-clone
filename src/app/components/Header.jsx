import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header>
        <div className="">
            <Image className="text-white" height="200" width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" />
        </div>
    </header>
  )
}
