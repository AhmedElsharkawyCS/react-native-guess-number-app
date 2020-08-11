import React, { useState } from "react";
import { View, FlatList } from "react-native";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";

export default function Goal() {
  const [goals, setGoals] = useState([]);
  const setEnteredGoal = (value) => {
    setGoals([...goals, { id: String(Math.random()), value: value, date: new Date() }]);
  };
  const resetGoal = () => {
    setGoals([]);
  };
  return (
    <>
      <GoalInput resetGoal={resetGoal} setEnteredGoal={setEnteredGoal} />
      <View>
        <FlatList data={goals} renderItem={({ item }) => <GoalItem item={item} key={item.id} />} keyExtractor={(item) => item.id} />
      </View>
    </>
  );
}
