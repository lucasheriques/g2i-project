import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Headline, Subheading } from "react-native-paper";

export default function QuizScreen() {
  return (
    <View style={styles.container}>
      <Headline>Category: "name"</Headline>

      <Subheading>Question</Subheading>

      <Text>1 of 10</Text>
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
