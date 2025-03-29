import React from 'react';
import { cn } from '@/lib/utils';

type PixelButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'destructive' | 'gold';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const PixelButton = ({ 
  children, 
  variant = 'primary', 
  className, 
  onClick,
  disabled = false,
  type = 'button'
}: PixelButtonProps) => {
  const variants = {
    primary: 'bg-minecraft-green text-white hover:bg-minecraft-darkGreen',
    secondary: 'bg-minecraft-blue text-white hover:bg-minecraft-darkBlue',
    accent: 'bg-minecraft-purple text-white hover:bg-minecraft-darkPurple',
    destructive: 'bg-minecraft-red text-white hover:bg-minecraft-darkRed',
    gold: 'bg-minecraft-gold text-minecraft-black hover:bg-minecraft-darkGold',
  };

  return (
    <button
      type={type}
      className={cn(
        'pixel-button pixel-corners',
        variants[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PixelButton;