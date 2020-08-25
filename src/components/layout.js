import Meta from './meta'
import { useState } from 'react'
import NavBar from '@/components/nav-bar'

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Meta />
      <div>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 markdown">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
