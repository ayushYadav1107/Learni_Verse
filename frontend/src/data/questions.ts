import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    piano: "g",
    question: "What keyboard key on the piano corresponds to ",
    options: ["G", "F", "H", "Y"],
    correctAnswer: "G",
    //imageUrl: "https://vitapiano.com/wp-content/uploads/2023/03/C-major-chord.png",
    level: 1
  },
  {
    id: 2,
    question: "Which of these is a major scale?",
    piano: "a",
    options: ["Do Re Me Fa Fi So La Do", "Do Re Mi Fa So La Ti Do", "Do Ra Me Fa So Le Te Do", "Do Re Mi Fi So La Ti Do"],
    correctAnswer: "Do Re Mi Fa So La Ti Do",
    level: 1
  },
  {
    id: 3,
    question: "What 3 notes together give F# chord? (select the option with the 3 keyboard notation of respective keys)",
    piano: "t",
    options: ["Y,K,P", "G,J,L", "F,H,K", "T,U,O"],
    correctAnswer: "T,U,O",
    //imageUrl: "https://littleredpiano.com/wp-content/uploads/2022/05/F-piano-chord.png",
    level: 1
  },
  {
    id: 4,
    piano: "d",
    question: "What of the following chords doesn't have a #?",
    options: ["D", "C", "E", "A"],
    correctAnswer: "E",
    //imageUrl: "https://images.ctfassets.net/3s5io6mnxfqz/5xUainL5JHi0ZQq94DHI9b/c59a46cb3bddb8be649d8b4321c570cd/C_sharp.png",
    level: 1
  }
  // Add more questions as needed
];