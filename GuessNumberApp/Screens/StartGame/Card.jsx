import React from "react";
import { StyleSheet, View } from "react-native";
import { Card as CardElement, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../../Constants";

export default function Card({ title, children }) {
  return (
    <CardElement title={title}>
      <Input placeholder='Number' leftIcon={<Icon name='hashtag' size={24} color='black' />} />
      {/* {children} */}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Reset' type='solid' onPress={() => {}} buttonStyle={{ backgroundColor: Colors.secondary }} />
        </View>
        <View style={styles.button}>
          <Button title='Confirm' type='solid' onPress={() => {}} buttonStyle={{ backgroundColor: Colors.primary }} />
        </View>
      </View>
    </CardElement>
  );
}

const styles = StyleSheet.create({
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
