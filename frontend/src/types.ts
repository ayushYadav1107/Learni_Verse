export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  imageUrl?: string;
  level: number;
  piano: string;
}

export interface UserProgress {
  xp: number;
  level: number;
  questionsAnswered: number[];
}