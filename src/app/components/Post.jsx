import Image from 'next/image'
import React from 'react'
import {BiDotsHorizontal} from 'react-icons/bi'
export default function Post({name,caption,img,profileimg}) {
  return (
    <div className="shadow-md border rounded-md border-gray-50 my-4">
        <div className="p-2 flex items-center justify-between space-x-2 bg-white">
        
        <img className="h-12 mr-3 object-cover rounded-full border p-1" src={profileimg} />
        <h1 className="text-sm font-semibold flex-1">{name}</h1>
        
        
        <BiDotsHorizontal />
        


        </div>
        <div className="post w-full object-cover">
            <img src={img} />
        </div>
    </div>
  )
}
