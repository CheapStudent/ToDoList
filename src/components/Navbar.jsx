import React from 'react';
import { FaEnvelope, FaComments, FaSearch } from 'react-icons/fa'; // Correct import

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Project M.
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search anything"
            className="ml-2 bg-transparent outline-none w-full"
          />
        </div>

        {/* Icons and User Info */}
        <div className="flex items-center space-x-6">
          {/* Mailbox Icon */}
          <div className="relative">
            <FaEnvelope className="text-2xl text-gray-700 cursor-pointer hover:text-blue-600" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>

          {/* Message Icon */}
          <div className="relative">
            <FaComments className="text-2xl text-gray-700 cursor-pointer hover:text-blue-600" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              5
            </span>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-700 font-bold">RG</span>
            </div>
            <div className="text-gray-700">
              <p className="font-semibold">Ravindra Gupta</p>
              <p className="text-sm">ravindra.gupta@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;