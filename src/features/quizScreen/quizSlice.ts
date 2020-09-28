import { getQuestions, Question } from "@api/openTdbAPI";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "@store/store";

interface Quiz {
  questionList: Question[];
  currentQuestion: number;
  rightQuestions: number[];
  wrongQuestions: number[];
}

type QuizState = {
  isLoading: boolean;
  error: string;
} & Quiz;

const initialState: QuizState = {
  currentQuestion: -1,
  error: "",
  isLoading: false,
  questionList: [],
  rightQuestions: [],
  wrongQuestions: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    getQuestionsSuccess(state, action: PayloadAction<Question[]>) {
      state.questionList = action.payload;
    },
    getQuestionsFailed(state, action: PayloadAction<Question[]>) {
      state.questionList = [];
    },
  },
});

export const { getQuestionsSuccess, getQuestionsFailed } = quizSlice.actions;

export default quizSlice.reducer;

export const fetchQuestions = (): AppThunk => async (dispatch) => {
  try {
    const questionList = await getQuestions();
    dispatch(getQuestionsSuccess(questionList));
  } catch (err) {
    dispatch(getQuestionsFailed([]));
  }
};
