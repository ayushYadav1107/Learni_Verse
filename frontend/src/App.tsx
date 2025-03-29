import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { CourseList } from './components/CourseList';
import type { User, Course } from './types';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<User | null>(null);
  const [showLogin, setShowLogin] = useState(false);

  const [courses] = useState<Course[]>([
    {
      id: '1',
      title: 'Introduction to Mathematics',
      description: 'Learn the fundamentals of mathematics through interactive lessons.',
      xpReward: 100,
      pointsReward: 50,
      completed: false,
      enrolled: false
    },
    {
      id: '2',
      title: 'Basic Science',
      description: 'Explore the wonders of science with hands-on experiments.',
      xpReward: 150,
      pointsReward: 75,
      completed: false,
      enrolled: false
    },
    {
      id: '3',
      title: 'English Literature',
      description: 'Discover classic literature and improve your writing skills.',
      xpReward: 120,
      pointsReward: 60,
      completed: false,
      enrolled: false
    }
  ]);

  const handleLogin = (email: string, password: string) => {
    setUser({
      id: '1',
      name: 'John Doe',
      email: email,
      level: 1,
      xp: 0,
      points: 0,
      achievements: [],
      enrolledCourses: []
    });
    setIsLoggedIn(true);
    setShowLogin(false);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const handleStartCourse = (courseId: string) => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }

    const course = courses.find(c => c.id === courseId);
    if (course && !course.completed && user) {
      // Update user's enrolled courses
      setUser(prevUser => ({
        ...prevUser,
        enrolledCourses: [...prevUser.enrolledCourses, courseId],
        xp: prevUser.xp + course.xpReward,
        points: prevUser.points + course.pointsReward,
        level: Math.floor((prevUser.xp + course.xpReward) / 1000) + 1
      }));

      // Update course enrollment status
      const updatedCourses = courses.map(c =>
        c.id === courseId ? { ...c, enrolled: true } : c
      );
      setCourses(updatedCourses);
    }
  };

  const handleNavigate = (page: string) => {
    if (page === 'dashboard' && !isLoggedIn) {
      setShowLogin(true);
      return;
    }
    setCurrentPage(page);
  };

  if (showLogin) {
    return <Login onLogin={handleLogin} onCancel={() => setShowLogin(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        user={user}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        onLogin={() => setShowLogin(true)}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {currentPage === 'dashboard' && user && (
          <Dashboard
            user={user}
            courses={courses.filter(course => user.enrolledCourses.includes(course.id))}
            onStartCourse={handleStartCourse}
          />
        )}
        {currentPage === 'home' && (
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to EduQuest</h1>
              <p className="text-xl text-gray-600 mb-8">Start your learning journey today!</p>
              {!isLoggedIn && (
                <button
                  onClick={() => setShowLogin(true)}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                >
                  Get Started
                </button>
              )}
            </div>
            <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
            <CourseList
              courses={courses}
              onStartCourse={handleStartCourse}
              isLoggedIn={isLoggedIn}
            />
          </div>
        )}
        {currentPage === 'courses' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
            <CourseList
              courses={courses}
              onStartCourse={handleStartCourse}
              isLoggedIn={isLoggedIn}
            />
          </div>
        )}
      </main>

      <Footer
        onNavigate={handleNavigate}
        currentPage={currentPage}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default App;