import { RootStackList as StackRouteList } from "@constants/types";
import HomeScreen from "@features/homeScreen/homeScreen";
import QuizScreen from "@features/quizScreen/quizScreen";
import ResultScreen from "@features/resultScreen/resultScreen";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import store from "@store/store";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#19216C",
    accent: "#841003",
    text: "#3E4C59",
  },
};

export default function App() {
  const Stack = createStackNavigator<StackRouteList>();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <StatusBar style="auto" />
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#19216C",
              },
              headerTintColor: "#fff",
            }}
          >
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen name="Trivia Quiz Challenge" component={QuizScreen} />
            <Stack.Screen
              name="Result"
              component={ResultScreen}
              options={({ navigation, route }) => ({
                headerLeft: (props) => (
                  <HeaderBackButton
                    {...props}
                    onPress={() => {
                      navigation.reset({ routes: [{ name: "Home" }] });
                    }}
                  />
                ),
              })}
            />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}
