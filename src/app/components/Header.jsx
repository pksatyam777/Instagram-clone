import Image from 'next/image'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import {FiPlusCircle} from 'react-icons/fi'
export default function Header() {
  return (
    <header className="flex items-center justify-between px-48 bg-white sticky shadow-md shadow-b z-30">
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
            <AiFillHome className="text-2xl transform transition-transform hover:scale-125 duration-200 ease-out hidden lg:inline-grid" />
            <FiPlusCircle className="text-2xl transform transition-transform hover:scale-125 duration-200 ease-out"/>
            <Image height="40" width="40" className=""  src="https://www.svgrepo.com/show/129839/avatar.svg" alt="user-image"/> 
        </div>
    </header>
  )
}
