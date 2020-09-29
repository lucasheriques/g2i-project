import { getQuestions, Question } from "@api/openTdbAPI";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "@store/store";

interface Quiz {
  questionList: Question[];
  currentQuestionId: number;
  rightQuestions: number[];
  wrongQuestions: number[];
}

type QuizState = {
  isLoading: boolean;
  error: string;
  score: number | null;
} & Quiz;

const initialState: QuizState = {
  currentQuestionId: -1,
  error: "",
  isLoading: false,
  questionList: [],
  rightQuestions: [],
  wrongQuestions: [],
  score: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    getQuestionsStart(state) {
      state.isLoading = true;
    },
    getQuestionsSuccess(state, action: PayloadAction<Question[]>) {
      state.isLoading = false;
      state.questionList = action.payload;
      state.currentQuestionId = 0;
    },
    getQuestionsFailed(state, action: PayloadAction<Question[]>) {
      state.isLoading = false;
      state.questionList = [];
    },
    nextQuestion(state, action: PayloadAction<boolean>) {
      state.currentQuestionId += 1;
    },
  },
});

export const {
  getQuestionsStart,
  getQuestionsSuccess,
  getQuestionsFailed,
} = quizSlice.actions;

export default quizSlice.reducer;
export const fetchQuestions = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getQuestionsStart());
    const questionList = await getQuestions();
    dispatch(getQuestionsSuccess(questionList));
  } catch (err) {
    dispatch(getQuestionsFailed([]));
  }
};
