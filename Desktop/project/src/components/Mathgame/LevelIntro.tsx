import React from 'react';
import { Play } from 'lucide-react';
import { LEVEL_DESCRIPTIONS } from './levels';

interface LevelIntroProps {
  level: number;
  onStart: () => void;
}

const LevelIntro: React.FC<LevelIntroProps> = ({ level, onStart }) => {
  const levelInfo = LEVEL_DESCRIPTIONS[level - 1];

  return (
    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-lg">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">{levelInfo.title}</h2>
        <div className="space-y-2 mb-6">
          {levelInfo.description.map((desc, index) => (
            <p key={index} className="text-gray-600">{desc}</p>
          ))}
        </div>
        <button
          onClick={onStart}
          className="flex items-center justify-center space-x-2 w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Play size={20} />
          <span>Start Level</span>
        </button>
      </div>
    </div>
  );
};

export default LevelIntro;
