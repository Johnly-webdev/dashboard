import React from 'react';

// Dummy user data for demonstration

const users = [
  { id: 1, name: 'Johnly Abraham', email: 'johnly@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
  { id: 3, name: 'Alex Smith', email: 'alex@example.com', role: 'Viewer', status: 'Suspended' },
  { id: 4, name: 'Emily Carter', email: 'emily@example.com', role: 'Admin', status: 'Active' },
  { id: 5, name: 'Daniel Kim', email: 'daniel@example.com', role: 'Editor', status: 'Active' },
  { id: 6, name: 'Sophie Lee', email: 'sophie@example.com', role: 'Viewer', status: 'Inactive' },
  { id: 7, name: 'Michael Chan', email: 'michael@example.com', role: 'Viewer', status: 'Active' },
  { id: 8, name: 'Rachel Green', email: 'rachel@example.com', role: 'Editor', status: 'Suspended' },
  { id: 9, name: 'Tom Holland', email: 'tom@example.com', role: 'Admin', status: 'Inactive' },
  { id: 10, name: 'Lisa Ray', email: 'lisa@example.com', role: 'Viewer', status: 'Active' },
  { id: 11, name: 'Chris Evans', email: 'chris@example.com', role: 'Editor', status: 'Suspended' },
  { id: 12, name: 'Sara Khan', email: 'sara@example.com', role: 'Admin', status: 'Active' },
  { id: 13, name: 'Zara Patel', email: 'zara@example.com', role: 'Viewer', status: 'Active' },
  { id: 14, name: 'Leo Grant', email: 'leo@example.com', role: 'Editor', status: 'Inactive' },
  { id: 15, name: 'Olivia Stone', email: 'olivia@example.com', role: 'Admin', status: 'Active' },
  { id: 16, name: 'Nathan Drake', email: 'nathan@example.com', role: 'Editor', status: 'Suspended' },
  { id: 17, name: 'Monica Geller', email: 'monica@example.com', role: 'Viewer', status: 'Active' },
  { id: 18, name: 'Chandler Bing', email: 'chandler@example.com', role: 'Viewer', status: 'Inactive' },
  { id: 19, name: 'Ross Geller', email: 'ross@example.com', role: 'Admin', status: 'Active' },
  { id: 20, name: 'Joey Tribbiani', email: 'joey@example.com', role: 'Viewer', status: 'Suspended' },
  { id: 21, name: 'Phoebe Buffay', email: 'phoebe@example.com', role: 'Editor', status: 'Active' },
  { id: 22, name: 'Clark Kent', email: 'clark@example.com', role: 'Admin', status: 'Inactive' },
  { id: 23, name: 'Bruce Wayne', email: 'bruce@example.com', role: 'Editor', status: 'Active' },
  { id: 24, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'Suspended' },
  { id: 25, name: 'Barry Allen', email: 'barry@example.com', role: 'Viewer', status: 'Active' },
];


const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-8 py-10">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Users List</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100 text-left text-gray-600 font-semibold">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.role}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block font-medium ${
                        user.status === 'Active'
                          ? 'text-green-600'
                          : user.status === 'Inactive'
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
