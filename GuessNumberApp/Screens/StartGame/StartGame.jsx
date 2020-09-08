import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../../Components/Card/Card";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { FontAwesomeIcon } from "../../Components/Icon";
import { Colors } from "../../../Constants";

export default function StartGame() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game</Text>
      <View style={styles.inputContainer}>
        <Card title='Write a Number'>
          <Input placeholder='Number' leftIcon={<FontAwesomeIcon name='hashtag' color='black' />} keyboardType='numeric' />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Reset' type='solid' onPress={() => {}} backgroundColor={Colors.secondary} />
            </View>
            <View style={styles.button}>
              <Button title='Confirm' type='solid' onPress={() => {}} backgroundColor={Colors.primary} />
            </View>
          </View>
        </Card>
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
  button: {
    width: 100,
  },
});
