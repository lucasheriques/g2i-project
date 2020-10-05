import { CORRECT_ANSWER, WRONG_ANSWER } from "@constants/strings";
import { Question } from "@constants/types";
import { shuffleArray } from "@utils/arrays";
import { Html5Entities } from "html-entities";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Paragraph, RadioButton } from "react-native-paper";

interface QCProps {
  question: Question;
  answer: string;
  setAnswer: (answer: string) => void;
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
      value={WRONG_ANSWER}
      labelStyle={styles.answer}
    />,
    <RadioButton.Item
      key={question?.correct_answer ?? "2"}
      label={question?.correct_answer}
      labelStyle={styles.answer}
      value={CORRECT_ANSWER}
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
