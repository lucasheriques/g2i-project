import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import { RootStackList as StackRouteList } from "./src/constants/types";
import FinishScreen from "./src/screens/FinishScreen";
import HomeScreen from "./src/screens/HomeScreen";
import QuizScreen from "./src/screens/QuizScreen";

export default function App() {
  const Stack = createStackNavigator<StackRouteList>();
  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
          <Stack.Screen name="Finish" component={FinishScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
