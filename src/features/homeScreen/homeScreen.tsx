import { StackNavigationProp } from "@react-navigation/stack";
import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Headline, Subheading } from "react-native-paper";

import { RootStackList } from "../../constants/types";

type HSProps = {
  navigation: StackNavigationProp<RootStackList, "Home">;
};

export default function HomeScreen({ navigation }: HSProps) {
  return (
    <View style={styles.container}>
      <LottieView source={require("@assets/socute.json")} autoPlay loop />
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
    </View>
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
  title: {},
  subtitle: {
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
