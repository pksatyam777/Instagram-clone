import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
        <section className="md:col-span-2">
            {/* story section  */}
            <Stories />

            {/* post section  */}

            <Posts/>
        </section>
        <section className="hidden md:inline-grid md:col-span-1 p-2">
            <div className="fixed w-[380px]">
            {/* mini profile section */}
            <MiniProfile />

            {/* suggestion section */}
            <Suggestions />
            </div>
        </section>
    </main>
  )
}
