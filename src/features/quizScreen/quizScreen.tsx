import Question from "@components/Question";
import { RootState } from "@store/rootReducer";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Headline, Subheading } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { fetchQuestions } from "./quizSlice";

export default function QuizScreen() {
  const dispatch = useDispatch();

  const {
    currentQuestion,
    error,
    isLoading,
    rightQuestions,
    wrongQuestions,
    questionList,
  } = useSelector((state: RootState) => state.quiz);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <View style={styles.container}>
      <Headline>Category: "name"</Headline>

      <Subheading>Question</Subheading>

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
