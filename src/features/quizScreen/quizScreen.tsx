import QuestionComponent from "@components/questionComponent";
import { RootStackList } from "@constants/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootState } from "@store/rootReducer";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  FAB,
  Headline,
  ProgressBar,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { fetchQuestions, nextQuestion } from "./quizSlice";

type QSProps = {
  navigation: StackNavigationProp<RootStackList, "Trivia Quiz Challenge">;
};

export default function QuizScreen({ navigation }: QSProps) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const { currentQuestionId, error, isLoading, questionList } = useSelector(
    (state: RootState) => state.quiz
  );

  const handleNext = () => {
    dispatch(nextQuestion(value === "T"));
  };

  const computeResults = () => {
    navigation.navigate("Result");
  };

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const lastQuestion = currentQuestionId === questionList.length - 1;

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Headline style={styles.title}>
            Question {currentQuestionId + 1} of {questionList.length}
          </Headline>
          <ProgressBar
            progress={(currentQuestionId + 1) / questionList.length}
            style={styles.progressBar}
          />
          <QuestionComponent
            question={questionList[currentQuestionId]}
            lastQuestion={currentQuestionId === questionList.length - 1}
            isLoading={isLoading}
            nextQuestion={handleNext}
            value={value}
            setValue={setValue}
            computeResults={computeResults}
          />
          <Button
            style={styles.fab}
            disabled={value === ""}
            mode="contained"
            icon={lastQuestion ? "check" : "share"}
            onPress={() => {
              setValue("");
              handleNext();
              if (lastQuestion) computeResults();
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
    marginBottom: 16,
  },
  progressBar: {
    marginBottom: 16,
  },
  fab: {
    margin: 16,
  },
});
