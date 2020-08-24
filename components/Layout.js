import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'

export default function Layout({ children }) {
  const [isOn, setIsOn] = useState(false)
  return (
    <>
      <Head>
        <title>DNP</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>

      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center space-x-2">
                  <img className="h-8 w-8" src="/favicon.ico" alt="Workflow logo" /><div className="text-white text-lg">DNP</div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center space-x-4">
                    <Link href="/"><a className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Home</a></Link>

                    <Link href="/about"><a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">About</a></Link>

                    <Link href="/assignment"><a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Assignment</a></Link>

                    <Link href="/help"><a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Help</a></Link>

                    <Link href="/playground"><a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Playground</a></Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <button onClick={() => setIsOn(!isOn)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                  {/* Menu open: "hidden", Menu closed: "block" */}
                  <svg className={`${isOn ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {/* Menu open: "block", Menu closed: "hidden" */}
                  <svg className={`${isOn ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/*
      Mobile menu, toggle classNames based on menu state.

      Open: "block", closed: "hidden"
    */}
          <div className={`${isOn ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/"><a className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Home</a></Link>

              <Link href="/about"><a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">About</a></Link>

              <Link href="/assignment"><a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Assignment</a></Link>

              <Link href="/help"><a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Help</a></Link>
            </div>
          </div>
        </nav>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 markdown">
            {children}
          </div>
        </main>
      </div>

    </>
  )
}