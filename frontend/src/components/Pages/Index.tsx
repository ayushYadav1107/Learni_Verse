import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../PixelButton';
import PixelCard from '../PixelCard';
import Navigation from '../Navigation';
import { Book, BookOpen, Music } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen minecraft-bg">
      <Navigation />
      
      <div className="pt-20 pb-10 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-pixel text-white mb-4 animate-float drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Welcome to LearniVerse Hut
            </h1>
            <p className="text-xl font-pixel text-white max-w-2xl mx-auto drop-shadow-[0_2px_1px_rgba(0,0,0,0.9)]">
              Start your learning adventure today!
            </p>
            
            <div className="mt-8">
              <Link to="/dashboard">
                <PixelButton variant="gold" className="text-lg animate-pulse-pixel">
                  Start Your Journey
                </PixelButton>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <FeatureCard
              icon={<Book className="w-10 h-10" />}
              title="Math Adventure"
              description="Solve puzzles and conquer math challenges to level up your skills"
              color="blue"
            />
            
            <FeatureCard
              icon={<Music className="w-10 h-10" />}
              title="Music Theory"
              description="Explore the world of notes, rhythms, and musical compositions"
              color="purple"
            />
            
            <FeatureCard
              icon={<BookOpen className="w-10 h-10" />}
              title="English Literature"
              description="Embark on journeys through classic stories and poems"
              color="green"
            />
          </div>
          
          <PixelCard className="mb-16 p-8 text-center">
            <h2 className="text-2xl font-pixel mb-4 text-minecraft-black">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="bg-minecraft-brown text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-pixel">1</div>
                <h3 className="font-pixel text-lg mb-2">Choose a Subject</h3>
                <p className="text-sm">Select from our range of interactive courses</p>
              </div>
              
              <div>
                <div className="bg-minecraft-brown text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-pixel">2</div>
                <h3 className="font-pixel text-lg mb-2">Complete Quests</h3>
                <p className="text-sm">Solve challenges and earn experience points</p>
              </div>
              
              <div>
                <div className="bg-minecraft-brown text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-pixel">3</div>
                <h3 className="font-pixel text-lg mb-2">Level Up</h3>
                <p className="text-sm">Track your progress and unlock new abilities</p>
              </div>
            </div>
          </PixelCard>
        </div>
      </div>
      
      <footer className="bg-minecraft-black bg-opacity-80 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="font-pixel text-sm">© 2023 LearniVerse Hut</p>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'green';
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => {
  const colorClasses = {
    blue: 'bg-minecraft-blue border-b-4 border-minecraft-darkBlue',
    purple: 'bg-minecraft-purple border-b-4 border-minecraft-darkPurple',
    green: 'bg-minecraft-green border-b-4 border-minecraft-darkGreen',
  };
  
  return (
    <div className={`${colorClasses[color]} p-6 text-white pixel-corners`}>
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-pixel text-lg text-center mb-2">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

export default Index;
