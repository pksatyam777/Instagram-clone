import Image from "next/image";
import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons//ai";
import { FaRegCommentDots, FaRegBookmark } from "react-icons/fa";
import {HiOutlineEmojiHappy} from 'react-icons/hi'
export default function Post({ name, caption, img, profileimg }) {
  return (
    <div className="shadow-md border rounded-md border-gray-50 my-4">
      <div className="p-2 flex items-center justify-between space-x-2 bg-white">
        <img
          className="h-12 mr-3 object-cover rounded-full border p-1"
          src={profileimg}
        />
        <h1 className="text-sm font-bold flex-1">{name}</h1>
        <BiDotsHorizontal />
      </div>
      <div className="post w-full object-cover">
        <img src={img} />
      </div>
      <div className="flex items-center justify-between space-x-2 p-2">
        <div className="flex justify-between space-x-4 items-center">
        <AiOutlineHeart className="btn" />
        <FaRegCommentDots className="btn" />
        </div>
        
          <FaRegBookmark className="btn" />
        
      </div>
      <div className="caption flex items-center space-x-2 p-2">
        <span className="text-sm font-bold">{name}</span><span className="text-sm truncate">{caption}</span>
      </div>
      <form className="p-2 flex items-center space-x-2">
        <HiOutlineEmojiHappy className="text-3xl" />
        <input type="text" className="bg-transparent border-none flex-1 focus-within:border-none focus:ring-0" placeholder="Enter your Comments here..." />
        <button className="text-blue-400 font-bold">Post</button>
      </form>
    </div>
  );
}
