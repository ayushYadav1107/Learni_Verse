import { create } from 'zustand';
import { UserProgress } from '../types';

interface Store {
  progress: UserProgress;
  updateXP: (amount: number) => void;
  addAnsweredQuestion: (questionId: number) => void;
}

export const useStore = create<Store>((set) => ({
  progress: {
    xp: 0,
    level: 1,
    questionsAnswered: [],
  },
  updateXP: (amount) =>
    set((state) => {
      const newXP = Math.max(0, state.progress.xp + amount);
      const newLevel = Math.floor(newXP / 1000) + 1;
      
      return {
        progress: {
          ...state.progress,
          xp: newXP,
          level: newLevel,
        },
      };
    }),
  addAnsweredQuestion: (questionId) =>
    set((state) => ({
      progress: {
        ...state.progress,
        questionsAnswered: [...state.progress.questionsAnswered, questionId],
      },
    })),
}));