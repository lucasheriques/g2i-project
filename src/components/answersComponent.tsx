import Congratulations from "@assets/congratulations.svg";
import { CorrectAnswers, Question } from "@constants/types";
import { Html5Entities } from "html-entities";
import React from "react";
import { StyleSheet } from "react-native";
import { List, Text } from "react-native-paper";

interface ACProps {
  score: number;
  questionList: Question[];
  correctAnswers: CorrectAnswers;
}
export default function AnswersComponent({
  score,
  questionList,
  correctAnswers,
}: ACProps) {
  const checkAnswer = (questionId: number): boolean =>
    correctAnswers[questionId];

  return (
    <List.Section
      title={score === 10 ? `You scored perfectly!` : `You scored ${score}/10!`}
      titleStyle={styles.listTitle}
      style={styles.listSection}
    >
      {score === 10 ? <Congratulations width="100%" height={150} /> : <></>}
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
    </List.Section>
  );
}

const styles = StyleSheet.create({
  listTitle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "#3E4C59",
  },
  listSection: {
    minWidth: "100%",
  },
});
