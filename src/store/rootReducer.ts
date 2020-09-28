import quizSliceReducer from "@features/quizScreen/quizSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({ quiz: quizSliceReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
