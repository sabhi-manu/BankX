import React from "react";
import { useAuth } from "../../../context/AuthContext";

const ProfilePage = () => {
  const {authUser} = useAuth()
  console.log('user details :',authUser)
  return (
    <div className="min-h-screen bg-slate-100 p-6 overflow-y-scroll">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Profile
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Manage your personal and security information
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">

        {/* Left Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 ">

          <h2 className="text-lg font-bold mb-5">
            Profile Information
          </h2>

          <div className="space-y-5">

            <div className="border-b pb-3">
              <p className="text-sm text-gray-500">
                Full Name
              </p>

              <p className="font-medium text-slate-800">
              {authUser?.user.userName}
              </p>
            </div>

            <div className="border-b pb-3">
              <p className="text-sm text-gray-500">
                Email Address
              </p>

              <p className="font-medium text-slate-800">
                {authUser?.user.email}
              </p>
            </div>

            <div className="border-b pb-2">
              <p className="text-sm text-gray-500">
                Phone Number
              </p>

              <p className="font-medium text-slate-800">
                +91 {authUser?.user.phoneNumber || "Not Provided"}
              </p>
            </div>

          </div>
            <div className="bg-white rounded-2xl  ">

            <h2 className="text-lg font-bold mb-3">
              Account Summary
            </h2>

            <div className="space-y-5">

              <div className="flex items-center justify-between border-b pb-3">
                <p className="text-sm text-gray-500">
                  Member Since
                </p>

                <p className="text-sm font-medium">
                  {authUser?.user.createdAt}
                </p>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <p className="text-sm text-gray-500">
                  Last Update
                </p>

                <p className="text-sm font-medium">
                  {authUser?.user.updatedAt}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Account Status
                </p>

                <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                  Active
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">

          {/* Security Settings */}
          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-lg font-bold mb-5">
              Security Settings
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-4 border-b pb-3 cursor-pointer hover:bg-slate-50 rounded-lg px-2 py-2 transition">
                <i className="ri-lock-password-line text-xl text-blue-500"></i>

                <p className="text-sm font-medium">
                  Change Password
                </p>
              </div>

              <div className="flex items-center gap-4 border-b pb-3 cursor-pointer hover:bg-slate-50 rounded-lg px-2 py-2 transition">
                <i className="ri-fingerprint-line text-xl text-green-500"></i>

                <p className="text-sm font-medium">
                  Two-Factor Authentication
                </p>
              </div>

              <div className="flex items-center gap-4 border-b pb-3 cursor-pointer hover:bg-slate-50 rounded-lg px-2 py-2 transition">
                <i className="ri-login-box-line text-xl text-purple-500"></i>

                <p className="text-sm font-medium">
                  Login Activity
                </p>
              </div>

              <div className="flex items-center gap-4 cursor-pointer hover:bg-slate-50 rounded-lg px-2 py-2 transition">
                <i className="ri-tv-2-line text-xl text-orange-500"></i>

                <p className="text-sm font-medium">
                  Manage Devices
                </p>
              </div>

            </div>
          </div>

          {/* Account Summary */}
        

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;