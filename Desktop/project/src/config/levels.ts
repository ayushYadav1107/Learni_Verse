import { LevelConfig, LevelDescription } from '../types/game';

export const GRID_SIZE = 20;
export const GAME_SPEED = 150;
export const FOOD_TIMEOUT = 500000; // 5 seconds

export const LEVEL_DESCRIPTIONS: LevelDescription[] = [
  {
    title: "Level 1 - Basic Addition",
    description: [
      "Each fruit is an addition operator",
      "Start at 0, get your score to EXACTLY 100!",
      "Only two fruits will appear at a time"
    ],
    startScore: 0
  },
  {
    title: "Level 2 - Higher Addition",
    description: [
      "Start at 200, reach EXACTLY 300",
      "Choose your additions carefully!"
    ],
    startScore: 200
  },
  {
    title: "Level 3 - Addition & Multiplication",
    description: [
      "Start at 0, reach EXACTLY 100",
      "Use both addition and multiplication",
      "Be careful with the final move!"
    ],
    startScore: 0
  },
  {
    title: "Level 4 - Subtraction & Division",
    description: [
      "Start at 100, get down to EXACTLY 1",
      "Use subtraction and division wisely",
      "Wrong moves will end the game!"
    ],
    startScore: 100
  },
  {
    title: "Level 5 - Mixed Operations",
    description: [
      "Balance positive and negative numbers",
      "Strategic choices are key!",
      "Reach the target score EXACTLY"
    ],
    startScore: 50
  },
  {
    title: "Level 6 - Advanced Addition & Subtraction",
    description: [
      "Larger numbers, more challenge",
      "Watch out for decoy fruits!",
      "Precision is crucial"
    ],
    startScore: 100
  },
  {
    title: "Level 7 - Multiplication & Division Only",
    description: [
      "No addition or subtraction allowed",
      "Master the art of multiplication",
      "Division is your friend"
    ],
    startScore: 2
  },
  {
    title: "Level 8 - Advanced Operations",
    description: [
      "Larger multipliers and divisors",
      "Choose the right path",
      "One wrong move ends the game"
    ],
    startScore: 10
  },
  {
    title: "Level 9 - All Operations",
    description: [
      "All operations are in play",
      "Find the perfect sequence",
      "Plan your moves carefully"
    ],
    startScore: 50
  },
  {
    title: "Level 10 - Ultimate Challenge",
    description: [
      "Fast-paced final challenge",
      "Multiple steps required",
      "Perfect precision needed!"
    ],
    startScore: 1
  }
];

export const LEVELS: LevelConfig[] = [
  {
    targetScore: 100,
    startScore: 0,
    maxFoods: 2,
    foodTimeout: FOOD_TIMEOUT,
    operations: [
      { symbol: '+', generator: () => Math.floor(Math.random() * 20) + 1 }
    ]
  },
  {
    targetScore: 300,
    startScore: 200,
    maxFoods: 2,
    foodTimeout: FOOD_TIMEOUT,
    operations: [
      { symbol: '+', generator: () => Math.floor(Math.random() * 25) + 1 }
    ]
  },
  {
    targetScore: 100,
    startScore: 0,
    maxFoods: 3,
    foodTimeout: FOOD_TIMEOUT,
    operations: [
      { symbol: '+', generator: () => Math.floor(Math.random() * 15) + 1 },
      { symbol: '×', generator: () => Math.floor(Math.random() * 3) + 2 }
    ]
  },
  {
    targetScore: 1,
    startScore: 100,
    maxFoods: 3,
    foodTimeout: FOOD_TIMEOUT,
    operations: [
      { symbol: '-', generator: () => Math.floor(Math.random() * 10) + 1 },
      { symbol: '÷', generator: () => Math.floor(Math.random() * 2) + 2 }
    ]
  },
  {
    targetScore: 100,
    startScore: 50,
    maxFoods: 3,
    foodTimeout: FOOD_TIMEOUT,
    operations: [
      { symbol: '+', generator: () => Math.floor(Math.random() * 20) + 1 },
      { symbol: '-', generator: () => Math.floor(Math.random() * 10) + 1 }
    ]
  },
  {
    targetScore: 200,
    startScore: 100,
    maxFoods: 3,
    foodTimeout: FOOD_TIMEOUT,
    operations: [
      { symbol: '+', generator: () => Math.floor(Math.random() * 30) + 1 },
      { symbol: '-', generator: () => Math.floor(Math.random() * 20) + 1 }
    ]
  },
  {
    targetScore: 100,
    startScore: 2,
    maxFoods: 2,
    foodTimeout: FOOD_TIMEOUT,
    operations: [
      { symbol: '+', generator: () => 1},
      { symbol: '×', generator: () => Math.floor(Math.random() * 4) + 2 },
      { symbol: '÷', generator: () => Math.floor(Math.random() * 2) + 2 }
    ]
  },
  {
    targetScore: 1000,
    startScore: 10,
    maxFoods: 3,
    foodTimeout: FOOD_TIMEOUT,
    operations: [
      { symbol: '×', generator: () => Math.floor(Math.random() * 5) + 3 },
      { symbol: '÷', generator: () => Math.floor(Math.random() * 3) + 2 }
    ]
  },
  {
    targetScore: 500,
    startScore: 50,
    maxFoods: 3,
    foodTimeout: FOOD_TIMEOUT,
    operations: [
      { symbol: '+', generator: () => Math.floor(Math.random() * 50) + 1 },
      { symbol: '-', generator: () => Math.floor(Math.random() * 25) + 1 },
      { symbol: '×', generator: () => Math.floor(Math.random() * 3) + 2 },
      { symbol: '÷', generator: () => Math.floor(Math.random() * 2) + 2 }
    ]
  },
  {
    targetScore: 1000,
    startScore: 1,
    maxFoods: 3,
    foodTimeout: FOOD_TIMEOUT / 2, // Faster food timeout for the final level
    operations: [
      { symbol: '+', generator: () => Math.floor(Math.random() * 100) + 1 },
      { symbol: '-', generator: () => Math.floor(Math.random() * 50) + 1 },
      { symbol: '×', generator: () => Math.floor(Math.random() * 5) + 2 },
      { symbol: '÷', generator: () => Math.floor(Math.random() * 3) + 2 }
    ]
  }
];