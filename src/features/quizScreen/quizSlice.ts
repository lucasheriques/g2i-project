import { getQuestions, Question } from "@api/openTdbAPI";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "@store/store";

interface Quiz {
  questionList: Question[];
  currentQuestionId: number;
  correctAnswers: { [questionId: number]: boolean };
  finished: boolean;
}

type QuizState = {
  isLoading: boolean;
  error: string;
  score: number;
} & Quiz;

const initialState: QuizState = {
  currentQuestionId: -1,
  error: "",
  finished: true,
  isLoading: false,
  questionList: [],
  correctAnswers: {},
  score: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
    getQuestionsStart(state) {
      state.isLoading = true;
    },
    getQuestionsSuccess(state, action: PayloadAction<Question[]>) {
      state.isLoading = false;
      state.finished = false;
      state.questionList = action.payload;
      state.currentQuestionId = 0;
    },
    getQuestionsFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.questionList = [];
    },
    nextQuestion(state, action: PayloadAction<boolean>) {
      if (action.payload) {
        state.correctAnswers[state.currentQuestionId] = true;
        state.score += 1;
      }

      if (state.currentQuestionId < state.questionList.length - 1)
        state.currentQuestionId += 1;
      else state.finished = true;
    },
  },
});

export const {
  reset,
  getQuestionsStart,
  getQuestionsSuccess,
  getQuestionsFailed,
  nextQuestion,
} = quizSlice.actions;

export default quizSlice.reducer;

export const fetchQuestions = (): AppThunk => async (dispatch) => {
  try {
    dispatch(reset());
    dispatch(getQuestionsStart());
    const questionList = await getQuestions();
    dispatch(getQuestionsSuccess(questionList));
  } catch (err) {
    dispatch(getQuestionsFailed(err));
  }
};
