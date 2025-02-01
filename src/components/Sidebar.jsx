import React from 'react';
import {
  FaHome,
  FaEnvelope,
  FaTasks,
  FaUsers,
  FaCog,
  FaProjectDiagram,
  FaPaintBrush,
  FaCode,
  FaLightbulb,
  FaEdit,
} from 'react-icons/fa';
import { Plus } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      {/* Navigation Links */}
      <div className="mb-8">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center py-2 hover:bg-gray-700 rounded">
              <FaHome className="mr-2" />
              Home
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 hover:bg-gray-700 rounded">
              <FaEnvelope className="mr-2" />
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 hover:bg-gray-700 rounded">
              <FaTasks className="mr-2" />
              Tasks
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 hover:bg-gray-700 rounded">
              <FaUsers className="mr-2" />
              Members
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 hover:bg-gray-700 rounded">
              <FaCog className="mr-2" />
              Settings
            </a>
          </li>
        </ul>
      </div>

      {/* My Projects Section */}
      <div className="mb-8">
        {/* <h3 className="text-sm font-semibold text-gray-400 mb-2">MY PROJECTS 
        </h3>  */}
        <h3 className="text-sm font-semibold text-gray-400 mb-2 flex items-center justify-between">
  <span>MY PROJECTS</span>
  <span className="text-xl font-bold mr-4 cursor-pointer">+</span>
</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center py-2 hover:bg-gray-700 rounded">
              <FaProjectDiagram className="mr-2" />
              Website Redesign
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 hover:bg-gray-700 rounded">
              <FaPaintBrush className="mr-2" />
              Design System
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 hover:bg-gray-700 rounded">
              <FaCode className="mr-2" />
              Wireframes
            </a>
          </li>
        </ul>
      </div>

      {/* Thoughts Time Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">THOUGHTS TIME</h3>
        <p className="text-gray-300 text-sm mb-4">
          We don't have any notice for you, till then you can share your thoughts with your peers.
        </p>
        <button className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          <FaEdit className="mr-2" />
          Write a message
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;