import React from 'react'
import Header from './components/Header'
import UploadModal from './components/UploadModal'
import Feed from './components/Feed'

export default function page() {
  return (
    <>
    <Header />
      <Feed />
      <UploadModal />
    </>
  )
}
