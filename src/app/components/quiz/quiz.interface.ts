export interface QuestionItem {
  category: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  type: string;
  allPossibleAnswers?: string[];
  selectedAnswer: string;
}
