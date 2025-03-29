import { useCallback, useEffect, useRef } from 'react';
import { GameState, GameLoop } from './types';

export const useGameLoop = (
  initialState: GameState,
  update: GameLoop,
  fps: number = 60
) => {
  const gameState = useRef<GameState>(initialState);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const animate = useCallback((currentTime: number) => {
    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = currentTime;
    }

    const deltaTime = currentTime - previousTimeRef.current;
    const interval = 1000 / fps;

    if (deltaTime >= interval) {
      gameState.current = update(gameState.current);
      previousTimeRef.current = currentTime;
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [update, fps]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);

  return gameState;
};