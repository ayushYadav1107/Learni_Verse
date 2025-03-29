import React from 'react';
import { UserStats } from './UserStats';
import { CourseList } from './CourseList';
import type { User, Course } from '../types';

interface DashboardProps {
  user: User;
  courses: Course[];
  onStartCourse: (courseId: string) => void;
}

export function Dashboard({ user, courses, onStartCourse }: DashboardProps) {
  return (
    <div className="flex-1 p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <UserStats user={user} />
      <h2 className="text-2xl font-bold mb-6">Your Courses</h2>
      <CourseList courses={courses} onStartCourse={onStartCourse} />
    </div>
  );
}