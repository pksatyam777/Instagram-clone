"use client"
import React from 'react'
import {ModalState} from '../Atom/ModalAtom'
import {useRecoilState} from 'recoil'
export default function UploadModal() {
    const [open,setOpen] = useRecoilState(ModalState) 
  return (
    <div>UploadModal

        {open && <h1>modal is open</h1>}
    </div>
  )
}
