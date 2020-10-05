import AnswersComponent from "@components/answersComponent";
import { RootStackList } from "@constants/types";
import { useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootState } from "@store/rootReducer";
import React from "react";
import { BackHandler, StyleSheet, ScrollView } from "react-native";
import { Button, List } from "react-native-paper";
import { useSelector } from "react-redux";

type RSProps = {
  navigation: StackNavigationProp<RootStackList, "Trivia Quiz Challenge">;
};

export default function ResultScreen({ navigation }: RSProps) {
  const { score, correctAnswers, questionList } = useSelector(
    (state: RootState) => state.quiz
  );

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.reset({ routes: [{ name: "Home" }] });
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const checkAnswer = (questionId: number): boolean =>
    correctAnswers[questionId];

  return (
    <ScrollView>
      <AnswersComponent
        score={score}
        questionList={questionList}
        correctAnswers={correctAnswers}
      />
      <Button
        icon="redo-variant"
        mode="contained"
        onPress={() => navigation.navigate("Home")}
        style={styles.tryAgainButton}
      >
        Play again!
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    textAlign: "center",
    padding: 16,
    paddingTop: 0,
  },

  tryAgainButton: {
    margin: 16,
  },
});
