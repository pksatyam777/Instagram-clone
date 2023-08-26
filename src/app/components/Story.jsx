import React from 'react'

export default function Story({username,img}) {
  return (
    <div className="">
        <img className='h-14 rounded-full p-[1.5px] text-lg border-2 border-red-600 border-spacing-6 cursor-pointer transform transition-transform hover:scale-110 ease-out duration-200' src={img} alt="user-profiles" />
        <p className="text-xs w-14 truncate">{username}</p>
    </div>
  )
}
