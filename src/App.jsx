import React from 'react';
import Navbar from './components/Navbar.jsx'; // Use .jsx extension
import Sidebar from './components/Sidebar.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default App;