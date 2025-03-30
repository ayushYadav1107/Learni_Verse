import React from 'react';
import { useStore } from '../store/useStore';

export const ProgressBar: React.FC = () => {
  const { progress } = useStore();
  const xpInCurrentLevel = progress.xp % 1000;
  const progressPercentage = (xpInCurrentLevel / 1000) * 100;

  return (
    <div className="w-full max-w-xl mx-auto mt-4 p-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold">Level {progress.level}</span>
        <span className="text-sm">{xpInCurrentLevel}/1000 XP</span>
      </div>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-900 transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
    </div>
  );
};