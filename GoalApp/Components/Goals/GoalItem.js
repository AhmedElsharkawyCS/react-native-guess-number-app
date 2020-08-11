import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function GoalItem({ item: { value, date } }) {
  return (
    <View style={styles.listItem}>
      <Text>{value}</Text>
      <Text>{`Created At ${new Date(date).toISOString()}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});
