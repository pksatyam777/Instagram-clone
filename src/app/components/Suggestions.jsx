"use client"
import React, { useState ,useEffect } from 'react'
import minifaker from 'minifaker'
import "minifaker/locales/en"
import Suggest from './Suggest'
export default function Suggestions() {
    const [suggestions,setSuggestions]=useState([])
    useEffect(()=>{
        const suggestions = minifaker.array(6,(i)=> ({ username: minifaker.username({locale:"en"}).toLowerCase() , img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}` ,id: i,jobrole:minifaker.jobTitle(),}))
        setSuggestions(suggestions)
    },[])
  return (
    <div className="px-2 py-4 ">
        <div className="flex justify-between items-center py-1 mb-6">
        <p className="text-sm text-gray-400">Suggestions for you</p>
        <button className="text-sm text-gray-700 font-bold">See All</button>
        </div>
        {suggestions?.map((suggest)=>(<Suggest key={suggest.id} username={suggest.username} img={suggest.img} jobrole={suggest.jobrole}  />))}
        </div>
  )
}
