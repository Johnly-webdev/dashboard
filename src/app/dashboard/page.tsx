import { FaUsers } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { TbPresentationAnalytics } from "react-icons/tb";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold mb-3">DASHBOARD</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Welcome back! Here you can manage your tasks, view analytics, and make adjustments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Analytics */}
          <Link href="dashboard/analytics">
            <button className="w-full text-left cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Analytics</h2>
                <TbPresentationAnalytics className="text-3xl text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-300">Gain insights into your performance and trends.</p>
            </button>
          </Link>

          {/* Settings */}
          <Link href="dashboard/settings">
            <button className="w-full text-left cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Settings</h2>
                <IoSettings className="text-3xl text-green-400 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-300">Customize and tweak your dashboard settings.</p>
            </button>
          </Link>

          {/* Tasks */}
          <Link href="dashboard/tasks">
            <button className="w-full text-left cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold capitalize">Tasks</h2>
                <BiTask className="text-3xl text-yellow-400 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-300">View, organize, and manage your daily tasks.</p>
            </button>
          </Link>

          {/* Users */}
          <Link href="dashboard/users">
            <button className="w-full text-left cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Users</h2>
                <FaUsers className="text-3xl text-pink-400 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-300">View and manage your user base.</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
