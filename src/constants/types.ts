export type RootStackList = {
  Home: undefined;
  Quiz: undefined;
  Finish: undefined;
};

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionListState = {
  data: Question[] | null;
  isFetching: boolean;
  error: string | null;
};

export enum QUESTION_LIST_ACTION_TYPES {
  START_FETCH = "QUESTION_LIST/START_FETCH",
  FAIL_FETCH = "QUESTION_LIST/FAIL_FETCH",
  FINISH_FETCH = "QUESTION_LIST/FINISH_FETCH",
}

export type StartFetchQuestionList = {
  type: string;
};

export type FailFetchQuestionList = {
  type: string;
  payload: string;
};

export type FinishFetchQuestionList = {
  type: string;
  payload: Question[];
};

export type QuestionListAction =
  | StartFetchQuestionList
  | FailFetchQuestionList
  | FinishFetchQuestionList;

export type AppState = {
  questionList: QuestionListState;
};
