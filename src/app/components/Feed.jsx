import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
        <section className="md:col-span-2">
            {/* story section  */}
            <Stories />

            {/* post section  */}

            <Posts/>
        </section>
        <section className="hidden md:inline-grid md:col-span-1">
            {/* mini profile section */}

            {/* suggestion section */}
        </section>
    </main>
  )
}
