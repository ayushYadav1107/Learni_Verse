import { useState } from 'react';
import Navigation from '../Navigation';
import PixelCard from '../PixelCard';
import PixelButton from '../PixelButton';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import ProgressBar from '../ProgressBar';

const EnglishCourse = () => {
  const [activeBook, setActiveBook] = useState<number | null>(null);
  
  const books = [
    {
      title: "Romeo and Juliet",
      author: "William Shakespeare",
      genre: "Tragedy",
      era: "Renaissance",
      progress: 75,
      description: "A tragic tale of two young lovers whose deaths ultimately reconcile their feuding families.",
      keyThemes: ["Love", "Fate", "Violence", "Youth", "Identity"]
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Southern Gothic",
      era: "Modern",
      progress: 40,
      description: "The story of racial injustice and moral growth as seen through the eyes of a child in the American South.",
      keyThemes: ["Justice", "Racism", "Innocence", "Morality", "Class"]
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Novel",
      era: "Modern",
      progress: 10,
      description: "A portrait of the Jazz Age in all its decadence and excess, through the story of a self-made millionaire.",
      keyThemes: ["Wealth", "Dreams", "Social Status", "Time", "Appearance"]
    }
  ];
  
  return (
    <div className="min-h-screen minecraft-bg pb-10">
      <Navigation />
      
      <div className="container mx-auto pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-pixel text-white mb-8 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            English Literature Journey
          </h1>
          
          <PixelCard className="mb-8">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="bg-minecraft-blue p-6 rounded-full text-white mb-4 md:mb-0 md:mr-6">
                <BookOpen size={40} />
              </div>
              <div>
                <h2 className="text-2xl font-pixel mb-2 text-center md:text-left">Literary Adventures</h2>
                <p className="text-gray-700">
                  Explore classic works of literature, analyze themes and characters, and improve your writing skills through interactive lessons.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-100 p-4 text-center pixel-corners">
                <div className="text-3xl mb-2">📚</div>
                <div className="font-pixel">3 Books</div>
                <div className="text-xs text-gray-600">In Your Library</div>
              </div>
              
              <div className="bg-gray-100 p-4 text-center pixel-corners">
                <div className="text-3xl mb-2">🏆</div>
                <div className="font-pixel">120 XP</div>
                <div className="text-xs text-gray-600">Reading Points</div>
              </div>
              
              <div className="bg-gray-100 p-4 text-center pixel-corners">
                <div className="text-3xl mb-2">✍️</div>
                <div className="font-pixel">2 Essays</div>
                <div className="text-xs text-gray-600">Completed</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              Your Reading List
            </h3>
            
            {books.map((book, index) => (
              <div key={index} className="mb-4">
                <div 
                  className="bg-white p-4 pixel-corners cursor-pointer flex justify-between items-center"
                  onClick={() => setActiveBook(activeBook === index ? null : index)}
                >
                  <div>
                    <h3 className="font-pixel text-lg">{book.title}</h3>
                    <p className="text-sm text-gray-600">by {book.author}</p>
                  </div>
                  <div className="text-xl">{activeBook === index ? '▼' : '▶'}</div>
                </div>
                
                {activeBook === index && (
                  <div className="bg-gray-100 p-4 border-t-0 mt-1 pixel-corners">
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-pixel">Reading Progress</span>
                        <span className="text-sm">{book.progress}%</span>
                      </div>
                      <ProgressBar value={book.progress} max={100} color="blue" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="font-pixel text-sm mb-1">Genre</div>
                        <div className="bg-minecraft-blue text-white text-xs px-2 py-1 inline-block pixel-corners">
                          {book.genre}
                        </div>
                      </div>
                      
                      <div>
                        <div className="font-pixel text-sm mb-1">Era</div>
                        <div className="bg-minecraft-purple text-white text-xs px-2 py-1 inline-block pixel-corners">
                          {book.era}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="font-pixel text-sm mb-1">Description</div>
                      <p className="text-sm">{book.description}</p>
                    </div>
                    
                    <div className="mb-4">
                      <div className="font-pixel text-sm mb-2">Key Themes</div>
                      <div className="flex flex-wrap gap-2">
                        {book.keyThemes.map((theme, themeIndex) => (
                          <div 
                            key={themeIndex}
                            className="bg-minecraft-gold bg-opacity-50 text-minecraft-black text-xs px-2 py-1 pixel-corners"
                          >
                            {theme}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <PixelButton variant="secondary">
                        Continue Reading
                      </PixelButton>
                      <PixelButton variant="primary">
                        Take Quiz
                      </PixelButton>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PixelCard variant="wood" className="text-white">
              <h3 className="font-pixel text-lg mb-4">Literary Techniques</h3>
              <div className="space-y-3">
                {[
                  { name: "Metaphor", description: "Indirect comparison between things", mastered: true },
                  { name: "Symbolism", description: "Use of symbols to represent ideas", mastered: true },
                  { name: "Irony", description: "Expression of meaning using language that indicates opposite", mastered: false },
                  { name: "Foreshadowing", description: "Hint of future events in the story", mastered: false }
                ].map((technique, index) => (
                  <div key={index} className="flex items-center p-2 bg-black bg-opacity-20 pixel-corners">
                    <div className="mr-3 text-xl">
                      {technique.mastered ? '✓' : '○'}
                    </div>
                    <div>
                      <div className="font-pixel text-sm">{technique.name}</div>
                      <div className="text-xs text-white text-opacity-80">{technique.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </PixelCard>
            
            <PixelCard>
              <h3 className="font-pixel text-lg mb-4">Writing Challenges</h3>
              <div className="space-y-3">
                <Challenge 
                  title="Character Analysis" 
                  description="Write a 500-word analysis of a character from any book"
                  reward="+30 XP"
                  difficulty="Intermediate"
                />
                <Challenge 
                  title="Poetry Composition" 
                  description="Write a sonnet following Shakespearean form"
                  reward="+45 XP"
                  difficulty="Advanced"
                />
                <Challenge 
                  title="Creative Response" 
                  description="Write an alternate ending to a story you've read"
                  reward="+25 XP"
                  difficulty="Beginner"
                />
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ChallengeProps {
  title: string;
  description: string;
  reward: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const Challenge = ({ title, description, reward, difficulty }: ChallengeProps) => {
  const difficultyColor = 
    difficulty === 'Beginner' ? 'bg-minecraft-green' : 
    difficulty === 'Intermediate' ? 'bg-minecraft-blue' : 
    'bg-minecraft-purple';
  
  return (
    <div className="bg-gray-100 p-3 pixel-corners">
      <div className="font-pixel text-sm mb-1">{title}</div>
      <p className="text-xs text-gray-700 mb-2">{description}</p>
      <div className="flex justify-between items-center">
        <span className={`${difficultyColor} text-white text-xs px-2 py-1 pixel-corners`}>
          {difficulty}
        </span>
        <span className="text-minecraft-green text-xs">{reward}</span>
      </div>
    </div>
  );
};

export default EnglishCourse;
