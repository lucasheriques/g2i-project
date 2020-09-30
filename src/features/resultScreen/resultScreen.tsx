import { RootStackList } from "@constants/types";
import { useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootState } from "@store/rootReducer";
import React from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import { Button, Headline, Subheading } from "react-native-paper";
import { useSelector } from "react-redux";

type RSProps = {
  navigation: StackNavigationProp<RootStackList, "Trivia Quiz Challenge">;
};

export default function ResultScreen({ navigation }: RSProps) {
  const { score, rightQuestions, wrongQuestions, questionList } = useSelector(
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

  return (
    <View style={styles.container}>
      <Headline>You scored {score}/10!</Headline>

      {questionList.map((question, index) => (
        <Text>{question.question}</Text>
      ))}
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
