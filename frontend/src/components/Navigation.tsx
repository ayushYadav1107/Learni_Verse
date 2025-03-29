import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PixelButton from './PixelButton';
import  {cn}  from "../lib/utils";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-minecraft-brown bg-opacity-90 backdrop-blur-sm px-6 py-3 z-50 flex items-center justify-between border-b-4 border-minecraft-darkBrown">
      <Link to="/" className="font-pixel text-white text-xl tracking-wider">
        LearniVerse Hut
      </Link>
      
      <div className="flex space-x-2">
        <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
        <NavLink to="/dashboard" isActive={isActive('/dashboard')}>Dashboard</NavLink>
        <NavLink to="/courses" isActive={isActive('/courses')}>Courses</NavLink>
        
        {/* If not on login page, show login button */}
        {location.pathname !== '/login' && (
          <Link to="/login">
            <PixelButton variant="gold" className="ml-2">
              Login
            </PixelButton>
          </Link>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavLink = ({ to, children, isActive }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "px-4 py-2 font-pixel text-sm",
        isActive 
          ? "bg-minecraft-darkBrown text-white pixel-corners" 
          : "text-white hover:bg-minecraft-darkBrown hover:bg-opacity-50 transition-colors pixel-corners"
      )}
    >
      {children}
    </Link>
  );
};

export default Navigation;