import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function StartGame() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number </Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title='Reset' />
          <Button title='Confirm' />
        </View>
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
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
});
