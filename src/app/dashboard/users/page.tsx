import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Users</h1>
        <p className="text-gray-600 mb-8">
          Manage your users here. You can view detailed information or browse a list of users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Details Card */}
          <Link href="/dashboard/users/users-details">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.01] transition-all cursor-pointer">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">User Details</h2>
              <p className="text-gray-700">
                View detailed information about each user in your system.
              </p>
            </div>
          </Link>

          {/* User List Card */}
          <Link href="/dashboard/users/users-list">
            <div className="bg-orange-50 p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.01] transition-all cursor-pointer">
              <h2 className="text-xl font-semibold text-orange-800 mb-2">User List</h2>
              <p className="text-gray-700">
                Browse and manage all users in the system.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
