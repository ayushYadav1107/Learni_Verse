import React from 'react';
import { Home, Layout, BookOpen } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  isLoggedIn: boolean;
}

export function Footer({ onNavigate, currentPage, isLoggedIn }: FooterProps) {
  if (!isLoggedIn) return null;

  return (
    <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-around">
          <button
            onClick={() => onNavigate('home')}
            className={`flex flex-col items-center space-y-1 ${
              currentPage === 'home' ? 'text-purple-600' : 'text-gray-600'
            }`}
          >
            <Home className="h-6 w-6" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => onNavigate('dashboard')}
            className={`flex flex-col items-center space-y-1 ${
              currentPage === 'dashboard' ? 'text-purple-600' : 'text-gray-600'
            }`}
          >
            <Layout className="h-6 w-6" />
            <span className="text-xs">Dashboard</span>
          </button>
          <button
            onClick={() => onNavigate('courses')}
            className={`flex flex-col items-center space-y-1 ${
              currentPage === 'courses' ? 'text-purple-600' : 'text-gray-600'
            }`}
          >
            <BookOpen className="h-6 w-6" />
            <span className="text-xs">Courses</span>
          </button>
        </nav>
      </div>
    </footer>
  );
}