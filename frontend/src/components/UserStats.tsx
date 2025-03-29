import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';
import { XPBar } from './XPBar';
import type { User } from '../types';

interface UserStatsProps {
  user: User;
}

export function UserStats({ user }: UserStatsProps) {
  const maxXP = user.level * 1000; // Each level requires more XP

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-purple-600">{user.level}</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-600">Level {user.level} Scholar</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <Trophy className="w-6 h-6 text-yellow-500 mx-auto" />
            <span className="block mt-1 font-semibold">{user.points}</span>
            <span className="text-sm text-gray-500">Points</span>
          </div>
          <div className="text-center">
            <Star className="w-6 h-6 text-blue-500 mx-auto" />
            <span className="block mt-1 font-semibold">{user.achievements.length}</span>
            <span className="text-sm text-gray-500">Achievements</span>
          </div>
          <div className="text-center">
            <Award className="w-6 h-6 text-green-500 mx-auto" />
            <span className="block mt-1 font-semibold">{user.xp}</span>
            <span className="text-sm text-gray-500">Total XP</span>
          </div>
        </div>
      </div>
      <XPBar currentXP={user.xp % maxXP} maxXP={maxXP} />
    </div>
  );
}