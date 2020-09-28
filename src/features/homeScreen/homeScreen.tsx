import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Headline, Subheading } from "react-native-paper";

import { RootStackList } from "../../constants/types";

type Props = {
  navigation: StackNavigationProp<RootStackList, "Home">;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Headline>Welcome to the Trivia Challenge!</Headline>
      <Subheading>
        You will be presented with 10 True or False questions.
      </Subheading>
      <Subheading>Can you score 100%?</Subheading>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate("Quiz")}
      >
        Begin
      </Button>
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
