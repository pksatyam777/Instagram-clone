import React from 'react'

export default function MiniProfile() {
  return (
    <div className="mt-10  p-2 flex items-center space-x-2 ">
        <img src="https://www.svgrepo.com/show/129839/avatar.svg" alt="profile-img" className="rounded-full h-14 border p-1" />
        <div className="flex-1">
        <p className="text-sm font-bold">{'Satyam Singh'}</p>
        <p className="text-sm text-gray-400">Welcome to instagram</p>
        </div>
        <button className="text-blue-500 text-sm cursor-pointer">Sign out</button>
        

    </div>
  )
}
