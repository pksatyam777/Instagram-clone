import React from 'react'
import {HiPlusCircle} from 'react-icons/hi'
export default function Story({username,img,isUser}) {
  return (
    <div className="relative">
        <img className='h-14 rounded-full p-[1.5px] text-lg border-2 border-red-600 border-spacing-6 cursor-pointer transform transition-transform hover:scale-110 ease-out duration-200' src={img} alt="user-profiles" />
        <p className="text-xs w-14 truncate">{username}</p>
        {isUser ?<img src="https://www.svgrepo.com/show/313146/minus-plus.svg"
         className="text-blue-700 text-sm h-6 absolute top-10 left-9 border-2 border-white border-spacing-1 rounded-full bg-white" />:null }
    </div>
  )
}
