export interface User {
  id: string;
  name: string;
  level: number;
  xp: number;
  points: number;
  achievements: Achievement[];
  email: string;
  enrolledCourses: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  pointsReward: number;
  completed: boolean;
  enrolled: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}