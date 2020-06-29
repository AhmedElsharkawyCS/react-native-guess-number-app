import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function App() {
  const [text, setText] = useState("Open up App.js to start working on your app!");
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button onPress={() => setText("The text has been changed!")} title='Change Text' />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
