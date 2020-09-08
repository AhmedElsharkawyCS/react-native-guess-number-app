import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FontAwesomeIcon({ name, size, color }) {
  return <Icon name={name} size={size || 20} color={color || "black"} />;
}
