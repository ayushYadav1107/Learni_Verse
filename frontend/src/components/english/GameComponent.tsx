import React from 'react';
import { useGameStore } from './useGameStore';
import { Choice } from './types';
import PixelButton from '../PixelButton';
import { ArrowRight, RotateCcw } from 'lucide-react';

interface GameComponentProps {
  onReturn?: () => void;
}

const GameComponent: React.FC<GameComponentProps> = ({ onReturn }) => {
  const { currentScene, dialogueIndex, scenes, isGameOver, dispatch } = useGameStore();

  const scene = scenes[currentScene];
  const dialogue = scene.dialogue[dialogueIndex];

  const handleNext = () => {
    if (!dialogue.choices) {
      dispatch({ type: 'NEXT_DIALOGUE' });
    }
  };

  const handleChoice = (choice: Choice) => {
    dispatch({ type: 'CHOOSE_OPTION', choice });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  const handleReturn = () => {
    if (onReturn) {
      onReturn();
    }
  };

  return (
    <div className="w-full">
      <PixelButton 
        variant="primary" 
        className="w-full mb-4"
        onClick={handleReturn}
      >
        I am done reading for now, take me back...
      </PixelButton>
      
      <div className="w-full h-[800px] relative overflow-hidden rounded-xl">
        {/* Background */}
        <img 
          src={scene.background} 
          alt="background" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Characters */}
        {dialogue.character && (
          <img
            src={dialogue.character.image}
            alt={dialogue.character.name}
            className={`absolute bottom-0 h-[600px] object-cover transition-all duration-300 ${
              dialogue.character.position === 'left' ? 'left-0' :
              dialogue.character.position === 'right' ? 'right-0' : 'left-1/2 -translate-x-1/2'
            }`}
          />
        )}

        {/* Dialogue Box */}
        <div className="absolute bottom-0 w-full p-6 bg-black/80 text-white">
          {dialogue.character && (
            <div className="text-xl font-bold text-blue-400 mb-2">
              {dialogue.character.name}
            </div>
          )}
          <div className="text-lg mb-4">{dialogue.text}</div>

          {/* Choices */}
          {dialogue.choices ? (
            <div className="flex flex-col gap-2">
              {dialogue.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(choice)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                >
                  {choice.text}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
              >
                Next <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Game Over / Reset */}
        {isGameOver && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Game Over</h2>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition mb-4"
              >
                Play Again <RotateCcw size={16} />
              </button>
              <button
                onClick={handleReturn}
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition w-full"
              >
                Return to Course
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameComponent;