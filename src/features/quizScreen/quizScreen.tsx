import QuestionComponent from "@components/questionComponent";
import { CORRECT_ANSWER } from "@constants/strings";
import { RootStackList } from "@constants/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootState } from "@store/rootReducer";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
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

  const { currentQuestionId, finished, isLoading, questionList } = useSelector(
    (state: RootState) => state.quiz
  );

  const handleNext = () => {
    dispatch(nextQuestion(answer === CORRECT_ANSWER));
  };

  useEffect(() => {
    if (finished) dispatch(fetchQuestions());
  }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [currentQuestionId]);

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
          <Animated.View
            style={{
              opacity: fadeAnim,
            }}
          >
            <QuestionComponent
              question={questionList[currentQuestionId]}
              answer={answer}
              setAnswer={setAnswer}
            />
          </Animated.View>
          <Button
            style={{ marginTop: 24 }}
            disabled={answer === ""}
            mode="contained"
            icon={lastQuestion ? "check" : "share"}
            onPress={() => {
              setAnswer("");
              fadeAnim.setValue(0);
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
});
