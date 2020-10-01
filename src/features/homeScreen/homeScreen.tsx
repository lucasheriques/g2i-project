import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Headline,
  Subheading,
  Text as Headng,
} from "react-native-paper";
import Svg, { Circle, Path } from "react-native-svg";

import { RootStackList } from "../../constants/types";

type HSProps = {
  navigation: StackNavigationProp<RootStackList, "Home">;
};

export default function HomeScreen({ navigation }: HSProps) {
  return (
    <LinearGradient
      colors={["#19216C", "#35469C", "#4C63B6"]}
      style={styles.curvedBackground}
    >
      <Headline style={styles.title}>Trivia Challenge</Headline>
      <Subheading style={styles.subtitle}>
        10 True or False questions! Let's test your trivia knowledge!
      </Subheading>
      <Subheading style={styles.subtitle}>Can you score 100%?</Subheading>
      <Button
        icon="pencil"
        mode="contained"
        style={styles.beginButton}
        onPress={() => {
          navigation.navigate("Trivia Quiz Challenge");
        }}
      >
        Begin
      </Button>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  beginButton: {
    backgroundColor: "#841003",
    width: "90%",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-evenly",
  },
  title: {
    color: "#fff",
  },
  subtitle: {
    color: "#fff",
    textAlign: "center",
  },
  curvedBackground: {
    width: "100%",
    minHeight: "100%",
    color: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
