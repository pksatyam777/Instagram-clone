import React from 'react'
import Post from './Post'

export default function Posts() {
    const Posts=[{
        id:1,
        name:'Satyam Singh',
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo voluptates dolore",
        img:"https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2022/02/shutterstock_1942284763-scaled.jpg",
        profileimg:"https://www.svgrepo.com/show/129839/avatar.svg",
    },
    {
        id:2,
        name:'Sameer Singh',
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo voluptates dolore",
        img:"https://media.istockphoto.com/id/1152544461/photo/two-women-using-their-mobile-phones-together.webp?b=1&s=170667a&w=0&k=20&c=Sg6oed3fbVXe4TxLXWsxF_0Cp1qIxXZXpTL8i8TuaJA=",
        profileimg:"https://www.svgrepo.com/show/129839/avatar.svg",
    }]
  return (
    <div className="px-48 mt-10">
        {Posts.map((postss)=>(<Post key={postss.id} name={postss.name} caption={postss.caption} img={postss.img} profileimg={postss.profileimg} />))}
        </div>
  )
}
