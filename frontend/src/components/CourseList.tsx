import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import type { Course } from '../types';

interface CourseListProps {
  courses: Course[];
  onStartCourse: (courseId: string) => void;
  isLoggedIn: boolean;
}

export function CourseList({ courses, onStartCourse, isLoggedIn }: CourseListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
              {course.completed ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : course.enrolled ? (
                <BookOpen className="w-6 h-6 text-purple-500" />
              ) : (
                <BookOpen className="w-6 h-6 text-blue-500" />
              )}
            </div>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="flex items-center">
                <span className="font-medium text-purple-600">+{course.xpReward}</span>
                <span className="ml-1">XP</span>
              </span>
              <span className="flex items-center">
                <span className="font-medium text-yellow-600">+{course.pointsReward}</span>
                <span className="ml-1">Points</span>
              </span>
            </div>
          </div>
          <button
            onClick={() => onStartCourse(course.id)}
            className={`w-full p-4 text-center font-semibold ${
              course.completed
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                : course.enrolled
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            } transition-colors`}
            disabled={course.completed}
          >
            {course.completed
              ? 'Completed'
              : course.enrolled
              ? 'Continue Course'
              : isLoggedIn
              ? 'Enroll Now'
              : 'Sign In to Enroll'}
          </button>
        </div>
      ))}
    </div>
  );
}