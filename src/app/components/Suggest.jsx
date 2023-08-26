import React from 'react'

export default function Suggest({username,img,jobrole}) {
  return (
    <div className="py-2 flex items-center space-x-2 ">
        <img src={img} alt="profile-img" className="rounded-full h-12 border p-1" />
        <div className="flex-1">
        <p className="text-sm font-bold">{username}</p>
        <p className="text-sm text-gray-400">{jobrole}</p>
        </div>
        <button className="text-blue-500 text-sm cursor-pointer">Follow</button>
        

    </div>
  )
}
