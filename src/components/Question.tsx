import { Question } from "@constants/types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  Headline,
  Subheading,
} from "react-native-paper";

interface QCProps {
  question: Question;
  isLoading: boolean;
}

export default function QuestionComponent({ question, isLoading }: QCProps) {
  console.log(question);
  return <ActivityIndicator />;
}
