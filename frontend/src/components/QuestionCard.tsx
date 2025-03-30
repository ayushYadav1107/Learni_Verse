import React, { useState } from 'react';
import { Question } from '../types';
import { useStore } from '../store/useStore';
import "./style.css";
import "./script.js";

interface QuestionCardProps {
  question: Question;
  onAnswer: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const { updateXP } = useStore();

  const handleAnswer = () => {
    if (!selectedAnswer || isAnswered) return;
    
    setIsAnswered(true);
    const isCorrect = selectedAnswer === question.correctAnswer;
    updateXP(isCorrect ? 50 : -10);
    
    setTimeout(() => {
      onAnswer();
      setSelectedAnswer(null);
      setIsAnswered(false);
    }, 1500);
  };
  
  if (question.piano=='g'){
  return (
    
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="wrapper">
      <header>
        <h2>Playable PIANO</h2>
      </header>
      <ul className="piano-keys">
        <li className="key white" data-key="a"><span>a</span></li>
        <li className="key black" data-key="w"><span>w</span></li>
        <li className="key white" data-key="s"><span>s</span></li>
        <li className="key black" data-key="e"><span>e</span></li>
        <li className="key white" data-key="d"><span>d</span></li>
        <li className="key white" data-key="f"><span>f</span></li>
        <li className="key black" data-key="t"><span>t</span></li>
        <li className="key white" data-key="g"><span>g</span></li>
        <li className="key black" data-key="y"><span>y</span></li>
        <li className="key white" data-key="h"><span>h</span></li>
        <li className="key black" data-key="u"><span>u</span></li>
        <li className="key white" data-key="j"><span>j</span></li>
        <li className="key white" data-key="k"><span>k</span></li>
        <li className="key black" data-key="o"><span>o</span></li>
        <li className="key white" data-key="l"><span>l</span></li>
        <li className="key black" data-key="p"><span>p</span></li>
        <li className="key white" data-key=";"><span>;</span></li>
      </ul>
    </div>
      <audio id="audiog" src='tunes/g.wav'></audio>
      <h2 className="text-xl font-bold mb-4">{question.question}<button className='butg'> G note</button>?</h2>
      
      
      {question.imageUrl && (
        <img
          src={question.imageUrl}
          alt="Question visual"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`w-full p-3 text-left rounded-lg transition-colors ${
              isAnswered
                ? option === question.correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : option === selectedAnswer
                  ? 'bg-red-100 border-red-500'
                  : 'bg-gray-100'
                : selectedAnswer === option
                ? 'bg-purple-100 border-purple-500'
                : 'bg-gray-100 hover:bg-purple-50'
            } border-2`}
            onClick={() => !isAnswered && setSelectedAnswer(option)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
      
      <button
        className={`mt-6 w-full py-3 px-6 rounded-lg text-white font-semibold ${
          selectedAnswer && !isAnswered
            ? 'bg-purple-600 hover:bg-purple-700'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
        onClick={handleAnswer}
        disabled={!selectedAnswer || isAnswered}
      >
        Submit Answer
      </button>
    </div>
  );
  }
  else{
    return (
    
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        <div className="wrapper">
        <header>
          <h2>Playable PIANO</h2>
        </header>
        <ul className="piano-keys">
          <li className="key white" data-key="a"><span>a</span></li>
          <li className="key black" data-key="w"><span>w</span></li>
          <li className="key white" data-key="s"><span>s</span></li>
          <li className="key black" data-key="e"><span>e</span></li>
          <li className="key white" data-key="d"><span>d</span></li>
          <li className="key white" data-key="f"><span>f</span></li>
          <li className="key black" data-key="t"><span>t</span></li>
          <li className="key white" data-key="g"><span>g</span></li>
          <li className="key black" data-key="y"><span>y</span></li>
          <li className="key white" data-key="h"><span>h</span></li>
          <li className="key black" data-key="u"><span>u</span></li>
          <li className="key white" data-key="j"><span>j</span></li>
          <li className="key white" data-key="k"><span>k</span></li>
          <li className="key black" data-key="o"><span>o</span></li>
          <li className="key white" data-key="l"><span>l</span></li>
          <li className="key black" data-key="p"><span>p</span></li>
          <li className="key white" data-key=";"><span>;</span></li>
        </ul>
      </div>
        <h2 className="text-xl font-bold mb-4">{question.question}</h2>
        
        
        {question.imageUrl && (
          <img
            src={question.imageUrl}
            alt="Question visual"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`w-full p-3 text-left rounded-lg transition-colors ${
                isAnswered
                  ? option === question.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : option === selectedAnswer
                    ? 'bg-red-100 border-red-500'
                    : 'bg-gray-100'
                  : selectedAnswer === option
                  ? 'bg-purple-100 border-purple-500'
                  : 'bg-gray-100 hover:bg-purple-50'
              } border-2`}
              onClick={() => !isAnswered && setSelectedAnswer(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>
        
        <button
          className={`mt-6 w-full py-3 px-6 rounded-lg text-white font-semibold ${
            selectedAnswer && !isAnswered
              ? 'bg-purple-600 hover:bg-purple-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          onClick={handleAnswer}
          disabled={!selectedAnswer || isAnswered}
        >
          Submit Answer
        </button>
      </div>
    );
  }
};