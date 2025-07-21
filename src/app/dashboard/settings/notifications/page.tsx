import React from 'react'

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>

        {/* Notification Preferences */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-700">Notification Preferences</h2>
          <div className="space-y-6">
            {/* Email Notifications */}
            <div>
              <label htmlFor="enable" className="block text-sm font-medium text-gray-600 mb-1">
                Email Notifications
              </label>
              <select
                name="enable"
                id="enable"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>

            {/* Push Notifications */}
            <div>
              <label htmlFor="enabler" className="block text-sm font-medium text-gray-600 mb-1">
                Push Notifications
              </label>
              <select
                name="enabler"
                id="enabler"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
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

export default Notifications
