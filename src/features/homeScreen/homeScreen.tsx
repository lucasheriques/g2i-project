import { quizSvg } from "@constants/strings";
import { StackNavigationProp } from "@react-navigation/stack";
import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Headline, Subheading } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { RootStackList } from "../../constants/types";

type HSProps = {
  navigation: StackNavigationProp<RootStackList, "Home">;
};

export default function HomeScreen({ navigation }: HSProps) {
  return (
    <View style={styles.container}>
      <View>
        <Headline style={styles.title}>
          Welcome to the Trivia Challenge!
        </Headline>
      </View>
      <Subheading style={styles.subtitle}>
        10 true or false questions. Let's test your trivia knowledge! Can you
        score 100%?
      </Subheading>
      <Button
        mode="contained"
        style={styles.beginButton}
        onPress={() => {
          navigation.navigate("Trivia Quiz Challenge");
        }}
        contentStyle={{ height: 64 }}
        labelStyle={{ fontSize: 24 }}
      >
        Begin
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  beginButton: {
    backgroundColor: "#19216C",
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
    fontWeight: "700",
    textAlign: "center",
    color: "#AD1D07",
  },
  subtitle: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
    padding: 8,
  },
  curvedBackground: {
    width: "100%",
    minHeight: "100%",
    color: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
