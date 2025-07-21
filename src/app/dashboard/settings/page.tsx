import React from 'react'
import Link from 'next/link'

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
        <p className="text-gray-600 mb-6">
          Customize your account settings, profile, and notifications here. Choose an option from the sidebar to begin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <Link href="settings/account">
                  <span className="block w-full px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer transition">
                    Account
                  </span>
                </Link>
              </li>
              <li>
                <Link href="settings/notifications">
                  <span className="block w-full px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer transition">
                    Notifications
                  </span>
                </Link>
              </li>
              <li>
                <Link href="settings/profile">
                  <span className="block w-full px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer transition">
                    Profile
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Select A Setting</h2>
            <p className="text-lg text-gray-600">
              Choose an option from the sidebar to manage your account, notifications, or profile settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
