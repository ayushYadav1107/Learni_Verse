import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { questions } from './data/questions';
import { useStore } from './store/useStore';

function App() {
  const { progress } = useStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const availableQuestions = questions.filter(
    q => q.level <= progress.level && !progress.questionsAnswered.includes(q.id)
  );

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => 
      (prev + 1) % availableQuestions.length
    );
  };

  return (
    <div className="min-h-screen bg-blue-200">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <ProgressBar />
        
        {availableQuestions.length > 0 ? (
          <div className="mt-8">
            
            <QuestionCard
              question={availableQuestions[currentQuestionIndex]}
              onAnswer={handleNextQuestion}
            />
          </div>
        ) : (
          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Congratulations! You've completed all questions for your current level.
            </h2>
            <p className="mt-4 text-gray-600">
              Keep earning XP to unlock more challenging questions!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;