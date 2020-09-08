import React from "react";
import { StyleSheet, View } from "react-native";
import { Card as CardElement, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../../Constants";

export default function Card({ title, children }) {
  return <CardElement title={title}>{children}</CardElement>;
}
