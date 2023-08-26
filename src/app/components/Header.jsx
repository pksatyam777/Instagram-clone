import Image from 'next/image'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import {FiPlusCircle} from 'react-icons/fi'
export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 bg-white">
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
            <Image className="object-contain" layout='fill' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" />
        </div>
        <div className="h-24 w-16 relative lg:hidden cursor-pointer">
            <Image className="object-contain" layout='fill' src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" />
        </div>
        <div className="relative">
           <AiOutlineSearch className='absolute top-3 left-3' />
           <input type="text" placeholder="search..." className="bg-gray-50 rounded-lg pl-12 border-gray-500 focus:ring-black focus:border-black  text" />
        </div>
        <div className=" flex justify-between space-x-6 items-center">
            <AiFillHome className="text-2xl" />
            <FiPlusCircle className="text-2xl"/>
            <Image height="40" width="40" className=""  src="https://www.svgrepo.com/show/129839/avatar.svg" /> 
        </div>
    </header>
  )
}
