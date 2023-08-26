import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

export default function Feed() {
  return (
    <main>
        <section>
            {/* story section  */}
            <Stories />

            {/* post section  */}

            <Posts/>
        </section>
        <section>
            {/* mini profile section */}

            {/* suggestion section */}
        </section>
    </main>
  )
}
