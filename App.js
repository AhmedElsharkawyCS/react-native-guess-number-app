import React from "react";
import { StyleSheet, View } from "react-native";
import Goal from "./GoalApp/Components/Goals";
import GuessNumberApp from "./GuessNumberApp";

export default function App() {
  let GoalAppDemo = () => (
    <View style={styles.gaolScreen}>
      <Goal />
    </View>
  );

  return <GuessNumberApp />;
}

const styles = StyleSheet.create({
  gaolScreen: {
    padding: 40,
  },
  guessNumberScreen: {
    flex: 1,
  },
});
