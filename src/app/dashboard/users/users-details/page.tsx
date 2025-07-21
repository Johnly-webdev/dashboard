import React from 'react'

const page = () => {

const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    activities: [
      { id: 1, description: "Updated password", timestamp: "2025-02-10" },
      { id: 2, description: "Changed email address", timestamp: "2025-01-25" },
      {
        id: 3,
        description: "Logged in from a new device",
        timestamp: "2025-01-15",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-10">
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">Role: {user.role}</p>
            <p
              className={`text-sm font-semibold ${
                user.status === 'Active' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              Status: {user.status}
            </p>
          </div>
        </div>

        {/* Recent Activities */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            {user.activities.map((activity) => (
              <li
                key={activity.id}
                className="flex items-start space-x-4 bg-gray-50 p-4 rounded-md shadow-sm"
              >
                <div className="flex-shrink-0 bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  A
                </div>
                <div>
                  <p className="text-gray-700">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;