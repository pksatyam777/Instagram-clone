"use client"
import React from 'react'
import {RecoilRoot} from 'recoil'
export default function RecoilProvider(props) {
  return (
    <div><RecoilRoot>{props.children}</RecoilRoot></div>
  )
}
