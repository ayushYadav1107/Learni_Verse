import React, { useRef, useEffect } from 'react';
import { GameState } from './types';

interface CanvasProps {
  width: number;
  height: number;
  gameState: React.RefObject<GameState>;
}

const Canvas: React.FC<CanvasProps> = ({ width, height, gameState }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      
      if (!ctx || !gameState.current) return;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw player
      const { player } = gameState.current;
      ctx.fillStyle = '#4F46E5';
      ctx.fillRect(player.x, player.y, player.width, player.height);

      // Request next frame
      requestAnimationFrame(render);
    };

    render();
  }, [width, height, gameState]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="border border-gray-200 rounded-lg shadow-lg"
    />
  );
};

export default Canvas;