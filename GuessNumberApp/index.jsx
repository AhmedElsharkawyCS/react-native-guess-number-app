import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./Components/Header";
import StartGame from "./Screens/StartGame";

export default function GuessNumberAppDemo() {
  return (
    <View style={styles.guessNumberScreen}>
      <Header title='Guess A Number' />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  guessNumberScreen: {
    flex: 1,
  },
});
