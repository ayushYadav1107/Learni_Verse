import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-orange-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-left justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">LearniVerse Hut</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="hover:text-purple-200 p-4 transition-colors">Home</button>
          <button className="hover:text-purple-200 p-4 transition-colors">Dashboard</button>
          <button className="bg-white-400 hover:text-purple-200 p-4 transition-colors">Courses</button>
          <button className="bg-yellow-300 text-black hover:text-purple-800 p-4 transition-colors">Login</button>
        </div>
      </div>
    </nav>
  );
};