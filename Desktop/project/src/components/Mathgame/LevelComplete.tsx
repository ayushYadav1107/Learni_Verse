import React from 'react';
import { Trophy } from 'lucide-react';

interface LevelCompleteProps {
  level: number;
  onContinue: () => void;
  onQuit: () => void;
}

const LevelComplete: React.FC<LevelCompleteProps> = ({ level, onContinue, onQuit }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-lg">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-purple-600 mb-2">Level {level} Complete!</h2>
        <div className="text-2xl font-semibold text-green-500 mb-6">+100 XP</div>
        
        <div className="space-y-3">
          <button
            onClick={onContinue}
            className="w-full bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Continue to Level {level + 1}
          </button>
          <button
            onClick={onQuit}
            className="w-full bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Quit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelComplete;