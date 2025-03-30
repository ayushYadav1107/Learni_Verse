import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PixelButton from '@/components/PixelButton';
import PixelInput from '@/components/PixelInput';
import PixelCard from '@/components/PixelCard';
import { toast } from 'sonner';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Login successful!');
      navigate('/');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen minecraft-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <PixelCard className="mb-8 py-8">
          <h1 className="text-2xl font-pixel text-center mb-6 text-minecraft-black">
            Welcome to LearniVerse Hut
          </h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <PixelInput
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
            
            <PixelInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            
            <div className="flex justify-center pt-4">
              <PixelButton 
                type="submit" 
                variant="primary" 
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? 'Loading...' : 'Login'}
              </PixelButton>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="font-pixel text-xs text-gray-700 mb-2">
              Don't have an account?
            </p>
            <PixelButton 
              variant="secondary"
              onClick={() => toast.info('Registration coming soon!')}
            >
              Register
            </PixelButton>
          </div>
        </PixelCard>
        
      </div>
    </div>
  );
};

export default Login;
