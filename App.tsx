import { RootStackList as StackRouteList } from "@constants/types";
import FinishScreen from "@features/finishScreen/finishScreen";
import HomeScreen from "@features/homeScreen/homeScreen";
import QuizScreen from "@features/quizScreen/quizScreen";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "@store/store";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

export default function App() {
  const Stack = createStackNavigator<StackRouteList>();
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
