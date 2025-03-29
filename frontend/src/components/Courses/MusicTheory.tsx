import React, { useState } from 'react';
import Navigation from '../Navigation';
import PixelButton from '../PixelButton';
import PixelCard from '../PixelCard';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

const MusicCourse = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen minecraft-bg pb-10">
      <Navigation />
      
      <div className="container mx-auto pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-pixel text-white mb-8 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Music Theory Adventure
          </h1>
          
          <PixelCard className="mb-8">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="bg-minecraft-purple p-6 rounded-full text-white mb-4 md:mb-0 md:mr-6">
                <Music size={40} />
              </div>
              <div>
                <h2 className="text-2xl font-pixel mb-2 text-center md:text-left">Explore the Musical Realm</h2>
                <p className="text-gray-700">
                  Learn the fundamentals of music theory through interactive lessons. Understand notes, rhythms, and compositions in a fun, game-like environment.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-4 pixel-corners mb-6">
              <div className="flex items-center">
                <div className="text-3xl mr-4">🎵</div>
                <div className="flex-grow">
                  <div className="font-pixel mb-1">Your Musical Journey</div>
                  <div className="bg-gray-300 h-4 pixel-corners">
                    <div className="bg-minecraft-purple h-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="font-pixel ml-4">40%</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Link to="/dashboard">
                <PixelButton variant="secondary" className="w-full">
                  Back to Dashboard
                </PixelButton>
              </Link>
              <Link to="/courses">
                <PixelButton variant="accent" className="w-full">
                  All Courses
                </PixelButton>
              </Link>
            </div>
          </PixelCard>
          
          <div className="mb-8">
            <h3 className="text-xl font-pixel text-white mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              Learning Modules
            </h3>
            
            <LessonSection
              title="The Basics of Music Notation"
              description="Learn to read and write music using standard notation."
              isActive={activeSection === 'notation'}
              setActive={() => setActiveSection(activeSection === 'notation' ? null : 'notation')}
              content={
                <div className="space-y-4">
                  <p>Music notation is the visual representation of sound. The five lines and four spaces between them are called a staff.</p>
                  
                  <div className="bg-white p-4 pixel-corners">
                    <h4 className="font-pixel mb-2">Common Notes</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-3xl">𝅝</div>
                        <div className="text-sm">Whole Note</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl">𝅗𝅥</div>
                        <div className="text-sm">Half Note</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl">𝅘𝅥</div>
                        <div className="text-sm">Quarter Note</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl">𝅘𝅥𝅮</div>
                        <div className="text-sm">Eighth Note</div>
                      </div>
                    </div>
                  </div>
                  
                  <PixelButton variant="accent">
                    Take Notation Quiz
                  </PixelButton>
                </div>
              }
            />
            
            <LessonSection
              title="Understanding Rhythm"
              description="Master the concepts of beats, measures, and time signatures."
              isActive={activeSection === 'rhythm'}
              setActive={() => setActiveSection(activeSection === 'rhythm' ? null : 'rhythm')}
              content={
                <div className="space-y-4">
                  <p>Rhythm is the pattern of time in music. It's organized into measures (or bars) with a time signature that tells us how many beats are in each measure.</p>
                  
                  <div className="bg-white p-4 pixel-corners">
                    <h4 className="font-pixel mb-2">Common Time Signatures</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold">4/4</div>
                        <div className="text-sm">Common Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">3/4</div>
                        <div className="text-sm">Waltz Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">6/8</div>
                        <div className="text-sm">Compound Duple</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">2/2</div>
                        <div className="text-sm">Cut Time</div>
                      </div>
                    </div>
                  </div>
                  
                  <PixelButton variant="accent">
                    Try Rhythm Exercise
                  </PixelButton>
                </div>
              }
            />
            
            <LessonSection
              title="Exploring Scales and Keys"
              description="Learn about major and minor scales, key signatures, and more."
              isActive={activeSection === 'scales'}
              setActive={() => setActiveSection(activeSection === 'scales' ? null : 'scales')}
              content={
                <div className="space-y-4">
                  <p>Scales are sequences of notes arranged by pitch. They form the foundation of melody and harmony in music.</p>
                  
                  <div className="bg-white p-4 pixel-corners">
                    <h4 className="font-pixel mb-2">Major Scale Pattern</h4>
                    <p className="text-center">Whole - Whole - Half - Whole - Whole - Whole - Half</p>
                    
                    <h4 className="font-pixel mb-2 mt-4">C Major Scale</h4>
                    <div className="flex justify-between">
                      <div className="text-center">C</div>
                      <div className="text-center">D</div>
                      <div className="text-center">E</div>
                      <div className="text-center">F</div>
                      <div className="text-center">G</div>
                      <div className="text-center">A</div>
                      <div className="text-center">B</div>
                      <div className="text-center">C</div>
                    </div>
                  </div>
                  
                  <PixelButton variant="accent">
                    Practice Scales
                  </PixelButton>
                </div>
              }
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PixelCard variant="wood" className="text-white">
              <h3 className="font-pixel text-lg mb-4">Musical Achievements</h3>
              <div className="space-y-3">
                <Achievement 
                  title="Note Reader" 
                  description="Identify all notes on the staff"
                  unlocked={true}
                  icon="🎼"
                />
                <Achievement 
                  title="Rhythm Master" 
                  description="Complete all rhythm exercises"
                  unlocked={false}
                  icon="🥁"
                />
                <Achievement 
                  title="Scale Explorer" 
                  description="Learn all major and minor scales"
                  unlocked={false}
                  icon="🎹"
                />
              </div>
            </PixelCard>
            
            <PixelCard>
              <h3 className="font-pixel text-lg mb-4">Upcoming Lessons</h3>
              <div className="space-y-3">
                <UpcomingLesson 
                  title="Chord Construction" 
                  difficulty="Intermediate"
                  xp="+35 XP"
                />
                <UpcomingLesson 
                  title="Musical Forms" 
                  difficulty="Advanced"
                  xp="+50 XP"
                />
                <UpcomingLesson 
                  title="Ear Training Basics" 
                  difficulty="Beginner"
                  xp="+25 XP"
                />
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LessonSectionProps {
  title: string;
  description: string;
  isActive: boolean;
  setActive: () => void;
  content: React.ReactNode;
}

const LessonSection = ({ title, description, isActive, setActive, content }: LessonSectionProps) => {
  return (
    <div className="mb-4">
      <div 
        className="bg-white p-4 pixel-corners cursor-pointer flex justify-between items-center"
        onClick={setActive}
      >
        <div>
          <h3 className="font-pixel text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="text-xl">{isActive ? '▼' : '▶'}</div>
      </div>
      
      {isActive && (
        <div className="bg-gray-100 p-4 border-t-0 mt-1 pixel-corners">
          {content}
        </div>
      )}
    </div>
  );
};

interface AchievementProps {
  title: string;
  description: string;
  unlocked: boolean;
  icon: string;
}

const Achievement = ({ title, description, unlocked, icon }: AchievementProps) => {
  return (
    <div className={`flex items-center p-2 ${unlocked ? 'bg-minecraft-gold bg-opacity-30' : 'bg-black bg-opacity-20'} pixel-corners`}>
      <div className="text-2xl mr-3">{icon}</div>
      <div>
        <div className="font-pixel text-sm">{title}</div>
        <div className="text-xs">{description}</div>
      </div>
      <div className="ml-auto">
        {unlocked ? '✓' : '🔒'}
      </div>
    </div>
  );
};

interface UpcomingLessonProps {
  title: string;
  difficulty: string;
  xp: string;
}

const UpcomingLesson = ({ title, difficulty, xp }: UpcomingLessonProps) => {
  const difficultyColor = 
    difficulty === 'Beginner' ? 'bg-minecraft-green' : 
    difficulty === 'Intermediate' ? 'bg-minecraft-blue' : 
    'bg-minecraft-purple';
  
  return (
    <div className="bg-gray-100 p-3 pixel-corners">
      <div className="font-pixel text-sm mb-1">{title}</div>
      <div className="flex justify-between items-center">
        <span className={`${difficultyColor} text-white text-xs px-2 py-1 pixel-corners`}>
          {difficulty}
        </span>
        <span className="text-minecraft-green text-xs">{xp}</span>
      </div>
    </div>
  );
};

export default MusicCourse;
