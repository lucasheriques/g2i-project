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
    <View style={styles.container}>
      <LinearGradient
        colors={["#19216C", "#05606E", "#647ACB"]}
        style={styles.curvedBackground}
      >
        <Headline style={styles.title}>Trivia Challenge</Headline>
        <Subheading style={styles.subtitle}>Can you score 100%?</Subheading>
      </LinearGradient>
      <Button
        icon="camera"
        mode="contained"
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
  },
  curvedBackground: {
    width: "100%",
    minHeight: "75%",
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
    color: "#fff",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
