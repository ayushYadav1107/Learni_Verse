import React from 'react';
import { Home, LayoutDashboard, LogOut, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-purple-600 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold">EduQuest</h1>
          <nav className="flex space-x-6">
            <a href="#" className="flex items-center space-x-1 hover:text-purple-200 transition-colors">
              <Home size={18} />
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-purple-200 transition-colors">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <User size={18} />
            <span>John Doe</span>
          </div>
          <a href="#" className="flex items-center space-x-1 hover:text-purple-200 transition-colors">
            <LogOut size={18} />
            <span>Logout</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;