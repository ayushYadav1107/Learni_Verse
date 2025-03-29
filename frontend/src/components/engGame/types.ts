export interface Character {
  name: string;
  image: string;
  position: 'left' | 'center' | 'right';
}

export interface DialogueLine {
  character?: Character;
  text: string;
  choices?: Choice[];
}

export interface Choice {
  text: string;
  nextScene: string;
}

export interface Scene {
  id: string;
  background: string;
  dialogue: DialogueLine[];
}

export interface GameState {
  currentScene: string;
  dialogueIndex: number;
  scenes: Record<string, Scene>;
  characters: Record<string, Character>;
  isGameOver: boolean;
}

export type GameAction = 
  | { type: 'NEXT_DIALOGUE' }
  | { type: 'CHOOSE_OPTION'; choice: Choice }
  | { type: 'RESET_GAME' };