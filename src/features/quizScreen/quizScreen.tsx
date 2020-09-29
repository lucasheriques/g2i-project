import QuestionComponent from "@components/Question";
import { RootState } from "@store/rootReducer";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  Headline,
  ProgressBar,
  Subheading,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { fetchQuestions } from "./quizSlice";

export default function QuizScreen() {
  const dispatch = useDispatch();

  const { currentQuestionId, error, isLoading, questionList } = useSelector(
    (state: RootState) => state.quiz
  );

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <View style={styles.container}>
      <QuestionComponent
        question={questionList[currentQuestionId]}
        isLoading={isLoading}
      />

      <Text>1 of 10</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-between",
    padding: 32,
  },
});
