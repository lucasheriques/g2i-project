import {
  FailFetchQuestionList,
  FinishFetchQuestionList,
  QuestionListAction,
  QuestionListState,
  QUESTION_LIST_ACTION_TYPES,
} from "@constants/types";

export const initialState: QuestionListState = {
  data: null,
  isFetching: false,
  error: null,
};

const questionList = (
  state: QuestionListState = initialState,
  action: QuestionListAction
): QuestionListState => {
  switch (action.type) {
    case QUESTION_LIST_ACTION_TYPES.START_FETCH:
      return { ...initialState, isFetching: true };

    case QUESTION_LIST_ACTION_TYPES.FINISH_FETCH: {
      const newQuestionList = action as FinishFetchQuestionList;
      return { isFetching: false, data: newQuestionList.payload, error: null };
    }

    case QUESTION_LIST_ACTION_TYPES.FAIL_FETCH: {
      const errorAction = action as FailFetchQuestionList;
      return { ...state, isFetching: false, error: errorAction.payload };
    }

    default:
      return state;
  }
};
