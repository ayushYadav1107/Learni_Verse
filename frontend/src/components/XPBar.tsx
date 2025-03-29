import React from 'react';

interface XPBarProps {
  currentXP: number;
  maxXP: number;
}

export function XPBar({ currentXP, maxXP }: XPBarProps) {
  const progress = (currentXP / maxXP) * 100;
  
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>{currentXP} XP</span>
        <span>{maxXP} XP</span>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-purple-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}