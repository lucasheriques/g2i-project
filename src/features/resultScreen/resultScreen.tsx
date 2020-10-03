import { RootStackList } from "@constants/types";
import { useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootState } from "@store/rootReducer";
import { Html5Entities } from "html-entities";
import React from "react";
import { BackHandler, StyleSheet, Text, ScrollView } from "react-native";
import { Button, Headline, List, Subheading } from "react-native-paper";
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
    <ScrollView style={styles.container}>
      <List.Section
        title={`You scored ${score}/10!`}
        titleStyle={styles.listTitle}
        style={styles.listSection}
      >
        {questionList.map((question, index) => (
          <List.Item
            key={index}
            title={`Question 0${index + 1}`}
            description={Html5Entities.decode(question.question)}
            left={(props) => (
              <List.Icon
                {...props}
                color={checkAnswer(index) ? "#18981D" : "#C52707"}
                icon={checkAnswer(index) ? "check" : "close"}
              />
            )}
          />
        ))}
        <Button
          icon="redo-variant"
          mode="contained"
          onPress={() => navigation.navigate("Home")}
          style={styles.tryAgainButton}
        >
          Play again!
        </Button>
      </List.Section>
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
  listTitle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "#3E4C59",
  },
  listSection: {
    minWidth: "100%",
  },
  tryAgainButton: {
    marginBottom: 32,
  },
});
