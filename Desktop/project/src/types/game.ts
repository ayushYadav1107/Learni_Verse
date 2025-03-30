export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export type Position = {
  x: number;
  y: number;
};

export type Food = Position & {
  operation: string;
  value: number;
  spawnTime: number;
};

export type LevelDescription = {
  title: string;
  description: string[];
  startScore: number;
};

export type GameState = {
  snake: Position[];
  foods: Food[];
  direction: Direction | null;
  score: number;
  level: number;
  targetScore: number;
  gameOver: boolean;
  isPaused: boolean;
  xp: number;
  isLevelComplete: boolean;
  showLevelIntro: boolean;
  lastMoveTime: number;
  hasStartedMoving: boolean;
  moveCount: number; // Added move counter
};

export type LevelConfig = {
  targetScore: number;
  startScore: number;
  maxFoods: number;
  foodTimeout: number;
  operations: Array<{
    symbol: string;
    generator: () => number;
  }>;
};