import React from 'react';
import { cn } from '@/lib/utils';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'wood' | 'stone' | 'dirt';
}

const PixelCard = ({ 
  children, 
  className,
  variant = 'default'
}: PixelCardProps) => {
  const variants = {
    default: 'bg-white bg-opacity-90',
    wood: 'bg-minecraft-brown bg-opacity-90 text-white',
    stone: 'bg-minecraft-gray bg-opacity-90 text-white',
    dirt: 'bg-[#8B6D5A] bg-opacity-90 text-white'
  };

  return (
    <div className={cn(
      'pixel-card pixel-corners', 
      variants[variant],
      className
    )}>
      {children}
    </div>
  );
};

export default PixelCard;
