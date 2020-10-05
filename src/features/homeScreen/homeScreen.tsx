import QuizLogo from "@assets/quizLogo.svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootState } from "@store/rootReducer";
import LottieView from "lottie-react-native";
import React from "react";
import { Image, Platform, ScrollView, StyleSheet, View } from "react-native";
import { Button, Headline, Subheading } from "react-native-paper";
import { useSelector } from "react-redux";

import { RootStackList } from "../../constants/types";

type HSProps = {
  navigation: StackNavigationProp<RootStackList, "Home">;
};

export default function HomeScreen({ navigation }: HSProps) {
  const { finished } = useSelector((state: RootState) => state.quiz);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {Platform.OS === "ios" ? (
          <LottieView
            source={require("@assets/quiz.json")}
            autoPlay
            loop={false}
            style={styles.iosLogo}
          />
        ) : (
          <QuizLogo height={250} />
        )}
        <Headline style={styles.title}>
          Welcome to the {"\n"}
          Trivia Challenge!
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
        {finished ? "Begin" : "Continue"}
      </Button>
    </ScrollView>
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
  iosLogo: {
    height: 250,
  },
  androidLogo: {
    height: 250,
    resizeMode: "contain",
  },
});
