import React from 'react';
import { User, LogOut } from 'lucide-react';
import type { User as UserType } from '../types';

interface HeaderProps {
  user: UserType | null;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  onLogin: () => void;
}

export function Header({ user, currentPage, onNavigate, onLogout, onLogin }: HeaderProps) {
  return (
    <header className="bg-purple-600 text-white py-4 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold cursor-pointer"
            >
              EduQuest
            </h1>
            <nav className="hidden md:flex space-x-4">
              <button
                onClick={() => onNavigate('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'home' ? 'bg-purple-700' : 'hover:bg-purple-700'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('dashboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'dashboard' ? 'bg-purple-700' : 'hover:bg-purple-700'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => onNavigate('courses')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'courses' ? 'bg-purple-700' : 'hover:bg-purple-700'
                }`}
              >
                Courses
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-1 text-sm font-medium hover:text-gray-200"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <button
                onClick={onLogin}
                className="bg-white text-purple-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}