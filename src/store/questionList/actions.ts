import {
  QUESTION_LIST_ACTION_TYPES,
  StartFetchQuestionList,
} from "@constants/types";

export const startFetchQuestions = (): StartFetchQuestionList => ({
  type: QUESTION_LIST_ACTION_TYPES.START_FETCH,
});
