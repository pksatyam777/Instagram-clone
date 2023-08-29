"use client"
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
export default function MiniProfile() {
  const { data: session } = useSession();
  if (!session) return null;
  return (
    <div className="mt-10  p-2 flex items-center space-x-2 ">
        <img src={session?.user?.image || "https://www.svgrepo.com/show/129839/avatar.svg"} alt="profile-img" className="rounded-full h-12 border p-1" />
        <div className="flex-1">
        <p className="text-sm font-bold">{session?.user.name || "User"}</p>
        <p className="text-sm text-gray-400">Welcome to instagram</p>
        </div>{console.log(session)}
        <button onClick={session?.user.name ? () => signOut():()=>signIn()} className="text-blue-500 text-sm cursor-pointer">{session && session.user?"Sign out":"Sign in"}</button>
        

    </div>
  )
}
