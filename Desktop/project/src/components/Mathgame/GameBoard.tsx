import React, { useEffect, useCallback } from 'react';
import { useGameStore } from './gameStore';
import { GRID_SIZE } from './levels';
import LevelComplete from './LevelComplete';
import LevelIntro from './LevelIntro';

const GameBoard: React.FC = () => {
  const {
    snake,
    foods,
    score,
    level,
    targetScore,
    gameOver,
    isPaused,
    isLevelComplete,
    showLevelIntro,
    moveSnake,
    setDirection,
    startGame,
    togglePause,
    resetGame,
    startLevel,
    continueToNextLevel,
    quitGame
  } = useGameStore();

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp': setDirection('UP'); break;
      case 'ArrowDown': setDirection('DOWN'); break;
      case 'ArrowLeft': setDirection('LEFT'); break;
      case 'ArrowRight': setDirection('RIGHT'); break;
      case ' ': togglePause(); break;
      case 'Enter': if (gameOver) resetGame(); break;
    }
  }, [setDirection, togglePause, gameOver, resetGame]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (!gameOver && !isPaused && !isLevelComplete && !showLevelIntro) {
      const interval = setInterval(moveSnake, 150);
      return () => clearInterval(interval);
    }
  }, [gameOver, isPaused, isLevelComplete, showLevelIntro, moveSnake]);

  const handleQuit = () => {
    const result = quitGame();
    console.log('Game ended with:', result);
    // Here you can handle the result (e.g., send to a parent component or API)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-white text-gray-900 p-8">
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-bold mb-0 text-purple-600">Math Snake</h1>
        <div className="flex gap-8 mb-0">
          <p className="text-xl">Score: {score}</p>
          <p className="text-xl">Level: {level}</p>
          <p className="text-xl">Target: {targetScore}</p>
        </div>
      </div>

      <div 
        className="relative bg-gray-100 rounded-lg shadow-lg"
        style={{
          width: `${GRID_SIZE * 20}px`,
          height: `${GRID_SIZE * 20}px`
        }}
      >
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute bg-purple-500 rounded"
            style={{
              width: '20px',
              height: '20px',
              left: `${segment.x * 20 + 1}px`,
              top: `${segment.y * 20 + 1}px`,
              transition: 'all 0.1s'
            }}
          />
        ))}

        {foods.map((food, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center bg-red-500 rounded text-sm font-bold text-white"
            style={{
              width: '20px',
              height: '20px',
              left: `${food.x * 20 + 1}px`,
              top: `${food.y * 20 + 1}px`
            }}
          >
            {food.operation}{food.value}
          </div>
        ))}

        {showLevelIntro && (
          <LevelIntro
            level={level}
            onStart={startLevel}
          />
        )}

        {isLevelComplete && (
          <LevelComplete
            level={level}
            onContinue={continueToNextLevel}
            onQuit={handleQuit}
          />
        )}

        {(gameOver || isPaused) && !isLevelComplete && !showLevelIntro && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-4">
                {gameOver ? 'Game Over!' : 'Paused'}
              </h2>
              <button
                className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600 transition-colors"
                onClick={gameOver ? resetGame : togglePause}
              >
                {gameOver ? 'Play Again' : 'Resume'}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p>Use arrow keys to move</p>
        <p>Press SPACE to pause</p>
      </div>
    </div>
  );
};

export default GameBoard;
