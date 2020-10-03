import QuestionComponent from "@components/questionComponent";
import { RootStackList } from "@constants/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootState } from "@store/rootReducer";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  Headline as Title,
  ProgressBar,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { fetchQuestions, nextQuestion } from "./quizSlice";

type QSProps = {
  navigation: StackNavigationProp<RootStackList, "Trivia Quiz Challenge">;
};

export default function QuizScreen({ navigation }: QSProps) {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const correctAnswer = "TRUE";

  const { currentQuestionId, finished, isLoading, questionList } = useSelector(
    (state: RootState) => state.quiz
  );

  const handleNext = () => {
    dispatch(nextQuestion(answer === correctAnswer));
  };

  useEffect(() => {
    if (finished) dispatch(fetchQuestions());
  }, []);

  const lastQuestion = currentQuestionId === questionList.length - 1;

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Title style={styles.title}>
            Question {currentQuestionId + 1} of {questionList.length}
          </Title>
          <ProgressBar
            progress={(currentQuestionId + 1) / questionList.length}
            style={styles.progressBar}
          />
          <QuestionComponent
            question={questionList[currentQuestionId]}
            answer={answer}
            setAnswer={setAnswer}
          />
          <Button
            style={styles.fab}
            disabled={answer === ""}
            mode="contained"
            icon={lastQuestion ? "check" : "share"}
            onPress={() => {
              setAnswer("");
              handleNext();
              if (lastQuestion) navigation.navigate("Result");
            }}
          >
            {lastQuestion ? "Finish" : "Continue"}
          </Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    textAlign: "center",
    padding: 32,
  },
  title: {
    marginBottom: 24,
  },
  progressBar: {
    marginBottom: 24,
  },
  fab: {
    margin: 24,
  },
});
