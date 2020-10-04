import { Question } from "@constants/types";
import { shuffleArray } from "@utils/arrays";
import { Html5Entities } from "html-entities";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Animated, View } from "react-native";
import { Card, Paragraph, RadioButton } from "react-native-paper";
import { accessibilityProps } from "react-native-paper/lib/typescript/src/components/MaterialCommunityIcon";

interface QCProps {
  question: Question;
  answer: string;
  setAnswer: any;
}
export default function QuestionComponent({
  question,
  answer,
  setAnswer,
}: QCProps) {
  useEffect(() => {
    answers = shuffleArray(answers);
  }, [question?.correct_answer]);

  let answers = [
    <RadioButton.Item
      key={question?.incorrect_answers[0] ?? "1"}
      label={question?.incorrect_answers[0]}
      value="FALSE"
      labelStyle={styles.answer}
    />,
    <RadioButton.Item
      key={question?.correct_answer ?? "2"}
      label={question?.correct_answer}
      labelStyle={styles.answer}
      value="TRUE"
    />,
  ];

  return (
    <View>
      <Paragraph>{question?.category}</Paragraph>
      <Card>
        <Card.Content style={styles.cardContent}>
          <Paragraph style={styles.question}>
            {Html5Entities.decode(question?.question)}
          </Paragraph>
          <RadioButton.Group
            onValueChange={(value) => setAnswer(value)}
            value={answer}
          >
            {answers.map((answer) => answer)}
          </RadioButton.Group>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    display: "flex",
    alignContent: "flex-end",
  },
  answer: {
    fontSize: 16,
    color: "#52606D",
  },
  question: {
    fontSize: 16,
    color: "#52606D",
  },
});
