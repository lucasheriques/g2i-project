# Trivia Questions App

The goal of this project is build an app where its main feature is a quiz. Each time, the user will be shown ten
different True or False questions from the [Open Trivia DB API](https://opentdb.com/).

After the last question is answered, the user will see his score and what the questions he answered correctly.

## Quick start

Prerequiste: install the [Expo CLI](https://docs.expo.io/workflow/expo-cli/).

1. Clone the project.

```
$ git clone https://github.com/lucasheriques/trivia-questions-app.git
```

2. Install the dependencies.

```
$ yarn install # feel free to use npm instead
```

3. Run the project with Expo. Then, open Expo in your Android or iOS phone and scan the QR Code to open the app.

```
$ expo start
```

You can also just download the Expo app in your smartphone, and run from the published project:
[here's the link](https://expo.io/@lucasheriques/g2i-project).

## Technologies used

- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://docs.expo.io/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React Navigation v5](https://reactnavigation.org/docs/getting-started)
- [Redux, using Redux Toolkit implementation](https://redux-toolkit.js.org/). Also using Redux Thunks for API calls and redux-logger for debugging
- [Lottie (for iOS logo)](https://github.com/react-native-community/lottie-react-native)
- [ESLint](https://eslint.org/docs/user-guide/getting-started) and [Prettier](https://prettier.io/)
- [Open TDB API](https://opentdb.com/api_config.php)
