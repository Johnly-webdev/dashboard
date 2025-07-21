import React from 'react'
import Link from 'next/link'

const Johnly = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-10 text-center max-w-xl w-full border border-white/10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Welcome to <span className="text-indigo-400">Johnly&rsquo;s</span> custom made Dashboard
        </h1>
        <Link href="/dashboard">
          <button className="inline-block cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
            Go to Dashboard →
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Johnly
