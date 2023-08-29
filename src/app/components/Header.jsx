"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import {FiPlusCircle} from 'react-icons/fi'
import {useSession ,signIn ,signOut} from "next-auth/react";
import {useRecoilState} from 'recoil'
import {ModalState} from '../Atom/ModalAtom'
export default function Header() {
  const {data:session} =useSession();
  const [open,setOpen]=useRecoilState(ModalState)
  return (
    <header className="flex items-center justify-between px-96  bg-white sticky top-0 shadow-md shadow-b z-30">
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
            <Link href="/">
            <Image className="object-contain" layout='fill' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" />
            </Link>
        </div>
        <div className="h-24 w-20 relative  lg:hidden cursor-pointer">
            <Image className="object-contain" layout='fill' src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" />
        </div>
        <div className="relative">
           <AiOutlineSearch className='absolute top-3 left-3' />
           <input type="text" placeholder="search..." className="bg-gray-50 rounded-lg pl-12 border-gray-500 focus:ring-black focus:border-black  text" />
        </div>
        <div className=" flex justify-between space-x-6 items-center">
            <AiFillHome  className="text-2xl transform transition-transform hover:scale-125 duration-200 ease-out hidden lg:inline-grid" />
            {session &&
            <FiPlusCircle onClick={()=>setOpen(true)} className="text-2xl transform transition-transform hover:scale-125 duration-200 ease-out"/>}
            {session && session?.user?.image? 
            <img src={session.user.image} className="rounded-full h-12 border p-1 cursor-pointer" onClick={()=>signOut()} /> :
            <p className="text-sm text-black cursor-pointer" onClick={()=>signIn()}>Sign in</p>
            }
            </div>
    </header>
  )
}
