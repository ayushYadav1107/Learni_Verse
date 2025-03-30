import { create } from 'zustand';
import { GameState, Position, Direction, Food } from './game';
import { GRID_SIZE, LEVELS, FOOD_TIMEOUT } from './levels';

const getRandomPosition = (snake: Position[]): Position => {
  let position: Position;
  do {
    position = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
  } while (snake.some(segment => segment.x === position.x && segment.y === position.y));
  return position;
};

const calculateRequiredValue = (currentScore: number, targetScore: number, operation: string): number | null => {
  switch (operation) {
    case '+':
      return targetScore - currentScore;
    case '-':
      return currentScore - targetScore;
    case '×':
      return targetScore % currentScore === 0 ? targetScore / currentScore : null;
    case '÷':
      return currentScore % targetScore === 0 ? currentScore / targetScore : null;
    default:
      return null;
  }
};

const generateFood = (level: number, snake: Position[], currentScore: number, isLastFood: boolean, moveCount: number): Food => {
  const levelConfig = LEVELS[level - 1];
  const position = getRandomPosition(snake);

  if (isLastFood && moveCount >= 10) {
    // Try operations in a balanced order
    const operations = [...levelConfig.operations];
    // Shuffle operations for randomness
    for (let i = operations.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [operations[i], operations[j]] = [operations[j], operations[i]];
    }
    
    for (const op of operations) {
      const requiredValue = calculateRequiredValue(currentScore, levelConfig.targetScore, op.symbol);
      if (requiredValue !== null && requiredValue > 0 && requiredValue <= 20) {
        return {
          ...position,
          operation: op.symbol,
          value: requiredValue,
          spawnTime: Date.now()
        };
      }
    }
  }

  // If not last food or no exact solution found, generate random food with balanced operation selection
  const operations = levelConfig.operations;
  const operationIndex = Math.floor(Math.random() * operations.length);
  const operation = operations[operationIndex];
  
  return {
    ...position,
    operation: operation.symbol,
    value: operation.generator(),
    spawnTime: Date.now()
  };
};

const calculateNewScore = (currentScore: number, operation: string, value: number): number => {
  switch (operation) {
    case '+': return currentScore + value;
    case '-': return Math.max(0, currentScore - value);
    case '×': return currentScore * value;
    case '÷': return Math.floor(currentScore / value);
    default: return currentScore;
  }
};

const initialState: GameState = {
  snake: [getRandomPosition([])],
  foods: [],
  direction: null,
  score: LEVELS[0].startScore,
  level: 1,
  targetScore: LEVELS[0].targetScore,
  gameOver: false,
  isPaused: false,
  xp: 0,
  isLevelComplete: false,
  showLevelIntro: true,
  lastMoveTime: 0,
  hasStartedMoving: false,
  moveCount: 0
};

export const useGameStore = create<GameState & {
  moveSnake: () => void;
  setDirection: (direction: Direction) => void;
  startGame: () => void;
  togglePause: () => void;
  resetGame: () => void;
  startLevel: () => void;
  continueToNextLevel: () => void;
  quitGame: () => { totalScore: number; highestLevel: number };
}>((set, get) => ({
  ...initialState,

  moveSnake: () => {
    const state = get();
    if (state.gameOver || state.isPaused || !state.direction || !state.hasStartedMoving) return;

    const head = { ...state.snake[0] };
    switch (state.direction) {
      case 'UP': head.y -= 1; break;
      case 'DOWN': head.y += 1; break;
      case 'LEFT': head.x -= 1; break;
      case 'RIGHT': head.x += 1; break;
    }

    // Check for wall collisions
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      set({ gameOver: true });
      return;
    }

    // Check for self-collision
    if (state.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      set({ gameOver: true });
      return;
    }

    let newSnake = [head];
    let newFoods = [...state.foods];
    let newScore = state.score;
    let isLevelComplete = false;
    let shouldGrow = false;
    const newMoveCount = state.moveCount + 1;

    // Remove expired foods
    newFoods = newFoods.filter(food => (Date.now() - food.spawnTime) < FOOD_TIMEOUT);

    // Check if snake ate food
    const foodIndex = newFoods.findIndex(food => food.x === head.x && food.y === head.y);
    if (foodIndex !== -1) {
      const food = newFoods[foodIndex];
      newScore = calculateNewScore(state.score, food.operation, food.value);
      newFoods.splice(foodIndex, 1);
      shouldGrow = true;

      // Check for level completion
      if (newScore === state.targetScore) {
        isLevelComplete = true;
      }
    }

    // Update snake body
    if (shouldGrow) {
      newSnake = [head, ...state.snake];
    } else {
      newSnake = [head, ...state.snake.slice(0, -1)];
    }

    // Generate new foods if needed
    const levelConfig = LEVELS[state.level - 1];
    while (newFoods.length < levelConfig.maxFoods && !isLevelComplete) {
      const isLastFood = newFoods.length === levelConfig.maxFoods - 1;
      newFoods.push(generateFood(state.level, newSnake, newScore, isLastFood, newMoveCount));
    }

    set({
      snake: newSnake,
      foods: newFoods,
      score: newScore,
      isLevelComplete,
      moveCount: newMoveCount
    });
  },

  setDirection: (direction: Direction) => {
    const state = get();
    const opposites = {
      UP: 'DOWN',
      DOWN: 'UP',
      LEFT: 'RIGHT',
      RIGHT: 'LEFT'
    };

    if (!state.hasStartedMoving) {
      set({ hasStartedMoving: true });
    }

    if (state.direction !== opposites[direction]) {
      set({ direction });
    }
  },

  startGame: () => {
    const levelConfig = LEVELS[0];
    set({
      ...initialState,
      score: levelConfig.startScore,
      foods: [generateFood(1, [initialState.snake[0]], levelConfig.startScore, false, 0)]
    });
  },

  startLevel: () => {
    set({ showLevelIntro: false });
  },

  togglePause: () => set(state => ({ isPaused: !state.isPaused })),

  resetGame: () => {
    const levelConfig = LEVELS[0];
    set({
      ...initialState,
      score: levelConfig.startScore,
      foods: [generateFood(1, [initialState.snake[0]], levelConfig.startScore, false, 0)]
    });
  },

  continueToNextLevel: () => {
    const state = get();
    const nextLevel = state.level + 1;
    if (nextLevel <= LEVELS.length) {
      const levelConfig = LEVELS[nextLevel - 1];
      set({
        snake: [getRandomPosition([])],
        foods: [generateFood(nextLevel, [], levelConfig.startScore, false, 0)],
        direction: null,
        score: levelConfig.startScore,
        level: nextLevel,
        targetScore: levelConfig.targetScore,
        gameOver: false,
        isPaused: false,
        isLevelComplete: false,
        showLevelIntro: true,
        hasStartedMoving: false,
        moveCount: 0,
        xp: state.xp + 100
      });
    }
  },

  quitGame: () => {
    const state = get();
    const result = {
      totalScore: state.score,
      highestLevel: state.level
    };
    set(initialState);
    return result;
  }
}));
