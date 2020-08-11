import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

export default function GoalInput({ setEnteredGoal, resetGoal }) {
  let [goal, setGoal] = useState("");
  const addGoal = () => {
    if (goal.length <= 0) {
      return Alert.alert("Warring!", "You can't add empty goal");
    }
    setEnteredGoal(goal);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder='Course Goal' style={styles.input} onChangeText={(value) => setGoal(value)} value={goal} />
      <View>
        <Button title='ADD' onPress={addGoal} color={"green"} />
      </View>
      <View style={{ marginLeft: 2 }}>
        <Button title='Delete' onPress={() => resetGoal()} color={"red"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    width: "65%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
