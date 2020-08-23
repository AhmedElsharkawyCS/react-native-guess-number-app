import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "./Card";

export default function StartGame() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game</Text>
      <View style={styles.inputContainer}>
        <Card title='Write a Number' />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
});
