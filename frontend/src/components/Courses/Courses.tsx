import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import PixelCard from '../PixelCard';
import PixelButton from '../PixelButton';
import ProgressBar from '../ProgressBar';
import { Book, BookOpen, Music } from 'lucide-react';

const Courses = () => {
  return (
    <div className="min-h-screen minecraft-bg pb-10">
      <Navigation />
      
      <div className="container mx-auto pt-24 px-4">
        <h1 className="text-3xl font-pixel text-white mb-8 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Learning Adventures
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <CourseCard
            title="Math Adventure"
            description="Solve puzzles and conquer math challenges to level up your skills"
            icon={<Book className="w-8 h-8" />}
            progress={65}
            color="green"
            path="/courses/math"
          />
          
          <CourseCard
            title="Music Theory"
            description="Explore the world of notes, rhythms, and musical compositions"
            icon={<Music className="w-8 h-8" />}
            progress={40}
            color="purple"
            path="/courses/music"
          />
          
          <CourseCard
            title="English Literature"
            description="Embark on journeys through classic stories and poems"
            icon={<BookOpen className="w-8 h-8" />}
            progress={75}
            color="blue"
            path="/courses/english"
          />
        </div>
        
        <PixelCard className="mb-12">
          <h2 className="text-xl font-pixel mb-6 text-center">Your Learning Stats</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon="📊"
              value="180"
              label="Problems Solved"
            />
            
            <StatCard
              icon="⏱️"
              value="14h 32m"
              label="Learning Time"
            />
            
            <StatCard
              icon="🌟"
              value="450"
              label="Total XP Earned"
            />
          </div>
        </PixelCard>
        
        <PixelCard variant="wood">
          <h2 className="text-xl font-pixel mb-6 text-white">Recommended Next Steps</h2>
          
          <div className="space-y-4">
            <RecommendationItem
              title="Complete 'Algebraic Expressions' in Math Adventure"
              difficulty="Intermediate"
              xp="+30 XP"
              path="/courses/math"
            />
            
            <RecommendationItem
              title="Learn about 'Musical Scales' in Music Theory"
              difficulty="Beginner"
              xp="+25 XP"
              path="/courses/music"
            />
            
            <RecommendationItem
              title="Read 'Shakespearean Sonnets' in English Literature"
              difficulty="Advanced"
              xp="+40 XP"
              path="/courses/english"
            />
          </div>
        </PixelCard>
      </div>
    </div>
  );
};

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  color: 'green' | 'blue' | 'purple' | 'gold' | 'red';
  path: string;
}

const CourseCard = ({ title, description, icon, progress, color, path }: CourseCardProps) => {
  return (
    <PixelCard className="relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 right-0 bg-minecraft-gold p-2 pixel-corners">
        <span className="font-pixel text-xs text-minecraft-black">Adventure</span>
      </div>
      
      <div className="flex justify-center mt-8 mb-4">
        <div className={`bg-minecraft-${color === 'green' ? 'green' : color === 'blue' ? 'blue' : 'purple'} p-4 rounded-full text-white`}>
          {icon}
        </div>
      </div>
      
      <h3 className="font-pixel text-lg text-center mb-3">{title}</h3>
      <p className="text-sm text-center mb-6 flex-grow">{description}</p>
      
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-xs">Progress</span>
          <span className="text-xs">{progress}%</span>
        </div>
        <ProgressBar value={progress} max={100} color={color} />
      </div>
      
      <Link to={path} className="block">
        <PixelButton variant={color === 'green' ? 'primary' : color === 'blue' ? 'secondary' : 'accent'} className="w-full">
          Continue
        </PixelButton>
      </Link>
    </PixelCard>
  );
};

interface StatCardProps {
  icon: string;
  value: string;
  label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => {
  return (
    <div className="bg-gray-100 p-4 text-center pixel-corners">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="font-pixel text-xl mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

interface RecommendationItemProps {
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  xp: string;
  path: string;
}

const RecommendationItem = ({ title, difficulty, xp, path }: RecommendationItemProps) => {
  const difficultyColor = 
    difficulty === 'Beginner' ? 'bg-minecraft-green' : 
    difficulty === 'Intermediate' ? 'bg-minecraft-blue' : 
    'bg-minecraft-purple';
  
  return (
    <div className="bg-black bg-opacity-20 p-4 pixel-corners flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <div className="mb-3 sm:mb-0">
        <h4 className="font-pixel text-sm text-white mb-1">{title}</h4>
        <div className="flex items-center">
          <span className={`${difficultyColor} text-white text-xs px-2 py-1 pixel-corners mr-2`}>
            {difficulty}
          </span>
          <span className="text-minecraft-gold text-xs">{xp}</span>
        </div>
      </div>
      
      <Link to={path}>
        <PixelButton variant="gold" className="sm:ml-4">
          Start
        </PixelButton>
      </Link>
    </div>
  );
};

export default Courses;