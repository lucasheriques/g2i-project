import { RootStackList as StackRouteList } from "@constants/types";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FinishScreen from "@screens/FinishScreen";
import HomeScreen from "@screens/HomeScreen";
import QuizScreen from "@screens/QuizScreen";
import store from "@store/store";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

export default function App() {
  if (__DEV__) {
    import("./ReactotronConfig");
  }
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
