"use client"
import React, { useEffect, useState } from 'react'
import minifaker from 'minifaker'
import "minifaker/locales/en"
import Story from './Story'
import { useSession } from 'next-auth/react'


export default function Stories() {
    const [storyUsers,setStoryUsers]=useState([])
    const { data: session } = useSession();
    useEffect(()=>{
        const storyUsers = minifaker.array(20,(i)=> ({ username: minifaker.username({locale:"en"}).toLowerCase() , img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}` ,id: i}))
        setStoryUsers(storyUsers)
    },[])
  return (
    <div className="flex items-center space-x-2 p-6 shadow-md bg-white border border-gray-200 mt-8 overflow-x-scroll rounded-sm scrollbar-none">
      
        {session && <Story username={session.user.name} img={session.user.image} isUser={true}/> }
        
        {storyUsers?.map((users)=>(<Story key={users.id} username={users.username} img={users.img} isUser={false} />))}
        </div>
  )
}
