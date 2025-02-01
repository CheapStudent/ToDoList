import React from 'react';
import { FaEdit, FaPaperclip } from 'react-icons/fa';

const MobileAppHeader = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      {/* Title and Buttons */}
      <div className="flex justify-between items-center">
        {/* Title */}
        {/* <h1 className="text-6xl font-semibold text-gray-800">Mobile App <FaPaperclip className="rounded-lg text-base cursor-pointer ml-96 absolute  top-40" />  <FaEdit className="rounded-lg text-base cursor-pointer ml-80 absolute  top-40" /> </h1> */}
         

        <div className="p-3">
      {/* Container for "Mobile App" and Icons */}
      <div className="flex items-center">
        {/* "Mobile App" Text */}
        <h1 className="text-6xl font-semibold text-gray-800">Mobile App</h1>

        {/* Space between "Mobile App" and FaPaperclip */}
        <div className="w-3.5"></div> {/* 10px space */}

        {/* FaPaperclip Icon */}
        <FaPaperclip className="text-base text-gray-800 cursor-pointer" />

        {/* Space between FaPaperclip and FaEdit */}
        <div className="w-3.5"></div> {/* 10px space */}

        {/* FaEdit Icon */}
        <FaEdit className="text-base text-gray-800 cursor-pointer" />
      </div>
    </div>
        
        

        {/* Buttons and Filters */}
        <div className="flex items-center space-x-4">
          {/* Invite Button */}
          <button className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
            Invite
            <span className="ml-2 bg-gray-700 text-white text-xs px-2 py-1 rounded-full">+2</span>
          </button>
          {/* Number */}
          <span className="text-gray-700 font-bold text-xl">88</span>
        </div>        
      </div>
      {/* Filter and Today Buttons */}
      <div className="flex items-center space-x-2 mt-11">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center">
              Filter
              <span className="ml-2 text-gray-500">➤</span>
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center">
              Today
              <span className="ml-2 text-gray-500">➤</span>
            </button>

             {/* Share Button */}
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg  absolute right-20 hover:bg-gray-200 flex items-center ">
            Share
          </button>
          </div>

          
    </div>
  );
};

export default MobileAppHeader;