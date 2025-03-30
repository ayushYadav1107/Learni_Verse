import { create } from 'zustand';
import { GameState, GameAction, Choice } from './types';
import { scenes, characters } from './gameData';

interface GameStore extends GameState {
  dispatch: (action: GameAction) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  currentScene: 'intro',
  dialogueIndex: 0,
  scenes,
  characters,
  isGameOver: false,
  dispatch: (action: GameAction) => {
    set((state) => {
      const currentScene = state.scenes[state.currentScene];
      const currentDialogue = currentScene.dialogue[state.dialogueIndex];

      switch (action.type) {
        case 'NEXT_DIALOGUE':
          if (state.dialogueIndex < currentScene.dialogue.length - 1) {
            return { ...state, dialogueIndex: state.dialogueIndex + 1 };
          }
          return { ...state, isGameOver: true };

        case 'CHOOSE_OPTION':
          return {
            ...state,
            currentScene: action.choice.nextScene,
            dialogueIndex: 0
          };

        case 'RESET_GAME':
          return {
            ...state,
            currentScene: 'intro',
            dialogueIndex: 0,
            isGameOver: false
          };

        default:
          return state;
      }
    });
  }
}));