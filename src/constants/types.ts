export type RootStackList = {
  Home: undefined;
  "Trivia Quiz Challenge": undefined;
  Result: undefined;
};

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type CorrectAnswers = { [questionId: number]: boolean };
