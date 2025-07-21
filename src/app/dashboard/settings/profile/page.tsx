import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-10">
        <h1 className="text-3xl font-bold text-gray-800">Profile Settings</h1>

        {/* Profile Picture Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Profile Picture</h2>
          <div className="w-32 h-32">
            <img
              src="/images/Johnly.PNG"
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-gray-300"
            />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Change Picture
          </button>
        </div>

        {/* Profile Info Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-700">Profile Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="full-name" className="block mb-1 text-sm text-gray-600">Full Name</label>
              <input
                id="full-name"
                type="text"
                placeholder="Full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="username" className="block mb-1 text-sm text-gray-600">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block mb-1 text-sm text-gray-600">Email Address</label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-6 border-t">
          <button className="px-4 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-100 transition">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
