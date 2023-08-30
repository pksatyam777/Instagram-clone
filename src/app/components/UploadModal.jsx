"use client"
import React ,{useRef }from 'react'
import {ModalState} from '../Atom/ModalAtom'
import {useRecoilState} from 'recoil'
import Modal from 'react-modal'
import {FaCameraRetro} from 'react-icons/fa'
import {useState} from 'react'
export default function UploadModal() {
    const [open,setOpen] = useRecoilState(ModalState) 
    const [caption,setCaption]=useState('')
    const [selectedfile,setSelectedFile]=useState(null)
    const [ImageURl,setImageURl] = useState(null)
    const filePickerRef=useRef(null);
    const ChooseFile=()=>{
      filePickerRef.current?.click();
    }
    const AddImageToPost=(e)=>{
      const formData  = new FormData();
      let selectedImage= e.target.files[0];
      let ImageURl=URL.createObjectURL(selectedImage)
      setImageURl(ImageURl)
      setSelectedFile(selectedImage)
      formData.append('image',selectedImage)
      

    }

  return (
    <div>

        {open && <Modal className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 border-transparent rounded-md shadow-md" onRequestClose={()=>{setOpen(false); setSelectedFile(null)} } isOpen={open}>
            <div className="flex flex-col justify-center items-center h-[100%]">
              {selectedfile && ImageURl ? (<img onClick={()=>ChooseFile()} className='w-full max-h-[250px] object-cover cursor-pointer' src={ImageURl} alt="image-upload" />):(
            <FaCameraRetro onClick={()=>ChooseFile()}  className="text-5xl text-red-400 cursor-pointer h-14" />
            )}
            <input type="file" onChange={(e)=>AddImageToPost(e)} hidden ref={filePickerRef} />
            <input type='text' value={caption} onChange={(e)=>setCaption(e.target.value)} className='px-2 border-none focus-within:border-none focus:ring-0 m-4' placeholder='Please enter caption here...' />
            <button className='bg-red-400 text-white w-full rounded-md p-1 m-1 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100'>Upload Post</button>
    
            </div>
            </Modal>}
    </div>
  )
}
