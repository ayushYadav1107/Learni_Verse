import { useState } from 'react';
import Navigation from '../Navigation';
import PixelCard from '../PixelCard';
import PixelButton from '../PixelButton';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const MathCourse = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  
  const questions = [
    {
      question: "What is 7 × 8?",
      options: ["54", "56", "64", "72"],
      correctAnswer: "56"
    },
    {
      question: "Solve for x: 3x + 5 = 20",
      options: ["3", "5", "7", "15"],
      correctAnswer: "5"
    },
    {
      question: "What is the square root of 81?",
      options: ["8", "9", "10", "27"],
      correctAnswer: "9"
    },
    {
      question: "If a rectangle has a length of 12 and a width of 5, what is its area?",
      options: ["17", "30", "60", "70"],
      correctAnswer: "60"
    },
    {
      question: "What is 40% of 80?",
      options: ["16", "24", "32", "40"],
      correctAnswer: "32"
    }
  ];
  
  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast.success("Correct answer!");
    } else {
      toast.error(`Wrong answer! The correct answer was ${questions[currentQuestion].correctAnswer}`);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };
  
  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };
  
  return (
    <div className="min-h-screen minecraft-bg pb-10">
      <Navigation />
      
      <div className="container mx-auto pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-pixel text-white mb-8 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Math Adventure
          </h1>
          
          {!gameStarted ? (
            <PixelCard className="mb-8 text-center">
              <h2 className="text-2xl font-pixel mb-4">Welcome to Math Quest!</h2>
              <p className="mb-6">Test your mathematical skills in this mini-game. Answer questions correctly to earn points and level up!</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <LevelCard level="Basic" description="Addition, Subtraction" />
                <LevelCard level="Intermediate" description="Multiplication, Division" />
                <LevelCard level="Advanced" description="Algebra, Geometry" />
              </div>
              
              <PixelButton variant="primary" onClick={() => setGameStarted(true)}>
                Start Math Quest
              </PixelButton>
            </PixelCard>
          ) : showResults ? (
            <PixelCard className="mb-8 text-center">
              <h2 className="text-2xl font-pixel mb-4">Quest Complete!</h2>
              <div className="text-5xl mb-6">🏆</div>
              <p className="text-lg mb-2">Your Score: {score} / {questions.length}</p>
              <p className="mb-8">Experience Points Earned: +{score * 10} XP</p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3">
                <PixelButton variant="primary" onClick={restartGame}>
                  Play Again
                </PixelButton>
                <Link to="/courses">
                  <PixelButton variant="secondary">
                    Back to Courses
                  </PixelButton>
                </Link>
              </div>
            </PixelCard>
          ) : (
            <PixelCard className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <div className="font-pixel">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
                <div className="font-pixel">
                  Score: {score}
                </div>
              </div>
              
              <div className="bg-minecraft-gold bg-opacity-20 p-4 mb-6 pixel-corners">
                <h2 className="text-xl font-pixel mb-2">
                  {questions[currentQuestion].question}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {questions[currentQuestion].options.map((option, index) => (
                  <PixelButton
                    key={index}
                    variant="secondary"
                    onClick={() => handleAnswer(option)}
                    className="text-left"
                  >
                    {option}
                  </PixelButton>
                ))}
              </div>
            </PixelCard>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PixelCard variant="wood" className="text-white">
              <h3 className="font-pixel text-lg mb-4">Math Skills to Master</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Basic Arithmetic Operations</li>
                <li>Fractions and Decimals</li>
                <li>Algebra Foundations</li>
                <li>Geometry Principles</li>
                <li>Word Problem Solving</li>
              </ul>
            </PixelCard>
            
            <PixelCard>
              <h3 className="font-pixel text-lg mb-4">Learning Rewards</h3>
              <div className="space-y-3">
                <RewardItem title="Problem Solver Badge" requirement="Complete 5 quizzes" />
                <RewardItem title="Math Wizard Hat" requirement="Score 90%+ on Advanced level" />
                <RewardItem title="Golden Calculator" requirement="Solve 50 problems correctly" />
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LevelCardProps {
  level: string;
  description: string;
}

const LevelCard = ({ level, description }: LevelCardProps) => {
  return (
    <div className="bg-gray-100 p-4 text-center pixel-corners">
      <h3 className="font-pixel text-lg mb-2">{level}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

interface RewardItemProps {
  title: string;
  requirement: string;
}

const RewardItem = ({ title, requirement }: RewardItemProps) => {
  return (
    <div className="flex items-center p-2 bg-gray-100 pixel-corners">
      <div className="text-xl mr-3">🎁</div>
      <div>
        <div className="font-pixel text-sm">{title}</div>
        <div className="text-xs text-gray-600">{requirement}</div>
      </div>
    </div>
  );
};

export default MathCourse;
