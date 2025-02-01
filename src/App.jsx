import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MobileAppHeader from './components/MobileAppHeader';
import TaskCard from './components/TaskCard';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Mobile App Header */}
          <MobileAppHeader />

          <TaskCard />

       

          {/* Additional Content */}
          <div className="mt-6">
            <h1 className="text-2xl font-bold">Welcome to Project M.</h1>
            <p className="text-gray-700">This is the main content area.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;