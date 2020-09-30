import QuestionComponent from "@components/Question";
import { RootState } from "@store/rootReducer";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  Headline,
  ProgressBar,
  Subheading,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { fetchQuestions, nextQuestion } from "./quizSlice";

export default function QuizScreen() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const { currentQuestionId, error, isLoading, questionList } = useSelector(
    (state: RootState) => state.quiz
  );

  const handleNext = () => {
    dispatch(nextQuestion(value === "correct"));
  };

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  console.log(value);

  return (
    <View style={styles.container}>
      <QuestionComponent
        question={questionList[currentQuestionId]}
        lastQuestion={currentQuestionId === questionList.length - 1}
        isLoading={isLoading}
        nextQuestion={handleNext}
        value={value}
        setValue={setValue}
      />

      <Text>
        {currentQuestionId + 1} of {questionList.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: 32,
  },
});
