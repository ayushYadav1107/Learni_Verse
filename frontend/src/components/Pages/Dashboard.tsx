import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import PixelCard from '../PixelCard';
import ProgressBar from '../ProgressBar';
import PixelButton from '../PixelButton';

const Dashboard = () => {
  return (
    <div className="min-h-screen minecraft-bg pb-10">
      <Navigation />
      
      <div className="container mx-auto pt-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <PixelCard className="h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-minecraft-blue text-white font-pixel flex items-center justify-center text-xl pixel-corners">
                  Lv 1
                </div>
                <div className="ml-4">
                  <h2 className="font-pixel text-lg mb-2">Adventure Stats</h2>
                  <ProgressBar 
                    value={50} 
                    max={500} 
                    color="blue" 
                    label="Experience" 
                    showValue={true}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <StatBlock label="Quests Completed" value="12" icon="📚" />
                <StatBlock label="Achievements" value="8" icon="🏆" />
                <StatBlock label="Items Collected" value="24" icon="🎒" />
              </div>
              
              <h3 className="font-pixel text-lg mb-4">Subject Skill Levels</h3>
              
              <div className="space-y-4">
                <SkillBar label="Math" value={100} color="green" />
                <SkillBar label="Music Theory" value={40} color="purple" />
                <SkillBar label="English Literature" value={75} color="blue" />
              </div>
              
              <div className="mt-6 text-center">
                <Link to="/courses">
                  <PixelButton variant="primary">Continue Learning</PixelButton>
                </Link>
              </div>
            </PixelCard>
          </div>
          
          <div>
            <PixelCard variant="wood" className="mb-6">
              <h2 className="font-pixel bg-minecraft-brown p-2 rounded-lg text-lg mb-4">Daily Quests</h2>
              
              <div className="space-y-4 bg-orange-300">
                <QuestItem 
                  title="Complete Math Challenge" 
                  reward="+25 XP" 
                  completed={false} 
                />
                <QuestItem 
                  title="Read Chapter 3" 
                  reward="+15 XP" 
                  completed={false} 
                />
                <QuestItem 
                  title="Practice Piano Notes" 
                  reward="+20 XP" 
                  completed={false} 
                />
              </div>
            </PixelCard>
            
            <PixelCard variant="stone">
              <h2 className="font-pixel bg-minecraft-brown p-2 rounded-lg text-lg mb-4">Achievements</h2>
              
              <div className="space-y-3 bg-orange-300">
                <AchievementItem 
                  title="First Steps" 
                  description="Complete your first lesson" 
                  completed={true} 
                />
                <AchievementItem 
                  title="Math Wizard" 
                  description="Solve 10 math problems" 
                  completed={true} 
                />
                <AchievementItem 
                  title="Melody Master" 
                  description="Complete music theory basics" 
                  completed={false} 
                />
                <AchievementItem 
                  title="Bookworm" 
                  description="Read 5 literature chapters" 
                  completed={false} 
                />
              </div>
            </PixelCard>
          </div>
        </div>
        
        <PixelCard>
          <h2 className="font-pixel text-lg mb-4">Recent Activity</h2>
          
          <div className="space-y-2 bg-neutral-300">
            <ActivityItem 
              title="Completed Math Quiz" 
              timestamp="2 hours ago" 
              points="+25 XP" 
            />
            <ActivityItem 
              title="Unlocked Music Theory Chapter 2" 
              timestamp="Yesterday" 
              points="+50 XP" 
            />
            <ActivityItem 
              title="Read 'Introduction to Poetry'" 
              timestamp="3 days ago" 
              points="+15 XP" 
            />
          </div>
        </PixelCard>
      </div>
    </div>
  );
};

interface StatBlockProps {
  label: string;
  value: string;
  icon: string;
}

const StatBlock = ({ label, value, icon }: StatBlockProps) => {
  return (
    <div className="bg-gray-100 p-4 pixel-corners">
      <div className="flex items-center">
        <div className="text-2xl mr-3">{icon}</div>
        <div>
          <div className="font-pixel text-lg">{value}</div>
          <div className="text-xs">{label}</div>
        </div>
      </div>
    </div>
  );
};

interface SkillBarProps {
  label: string;
  value: number;
  color: 'green' | 'blue' | 'purple' | 'gold' | 'red';
}

const SkillBar = ({ label, value, color }: SkillBarProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-pixel text-sm">{label}</span>
        <span className="font-pixel text-sm">{value}%</span>
      </div>
      <ProgressBar value={value} max={100} color={color} />
    </div>
  );
};

interface QuestItemProps {
  title: string;
  reward: string;
  completed: boolean;
}

const QuestItem = ({ title, reward, completed }: QuestItemProps) => {
  return (
    <div className="flex justify-between items-center p-2 bg-black bg-opacity-20 pixel-corners">
      <div className="flex items-center">
        <div className={`w-5 h-5 mr-3 ${completed ? 'bg-minecraft-green' : 'bg-gray-400'} pixel-corners flex items-center justify-center text-white`}>
          {completed && '✓'}
        </div>
        <span className="font-pixel text-sm">{title}</span>
      </div>
      <span className="font-pixel text-xs text-minecraft-gold">{reward}</span>
    </div>
  );
};

interface AchievementItemProps {
  title: string;
  description: string;
  completed: boolean;
}

const AchievementItem = ({ title, description, completed }: AchievementItemProps) => {
  return (
    <div className={`p-2 ${completed ? 'bg-minecraft-gold bg-opacity-30' : 'bg-black bg-opacity-20'} pixel-corners`}>
      <div className="flex items-center">
        <div className={`text-lg mr-2 ${completed ? 'opacity-100' : 'opacity-50'}`}>
          {completed ? '🏆' : '🔒'}
        </div>
        <div>
          <div className="font-pixel text-sm">{title}</div>
          <div className="text-xs opacity-80">{description}</div>
        </div>
      </div>
    </div>
  );
};

interface ActivityItemProps {
  title: string;
  timestamp: string;
  points: string;
}

const ActivityItem = ({ title, timestamp, points }: ActivityItemProps) => {
  return (
    <div className="flex justify-between items-center p-3 border-b border-gray-200">
      <div>
        <div className="font-pixel text-sm">{title}</div>
        <div className="text-xs text-gray-500">{timestamp}</div>
      </div>
      <div className="font-pixel text-sm text-minecraft-green">{points}</div>
    </div>
  );
};

export default Dashboard;
