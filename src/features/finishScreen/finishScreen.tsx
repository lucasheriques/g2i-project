import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Headline, Subheading } from "react-native-paper";

export default function FinishScreen() {
  return (
    <View style={styles.container}>
      <Headline>You scored 3/10!</Headline>

      <Text>+ Right question</Text>
      <Text>+ Right question</Text>
      <Text>+ Right question</Text>
      <Text>+ Right question</Text>
      <Text>- Wrong question</Text>
      <Text>- Wrong question</Text>
      <Text>- Wrong question</Text>
      <Text>- Wrong question</Text>
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
