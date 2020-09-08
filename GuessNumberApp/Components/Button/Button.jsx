import React from "react";
import { Button as ButtonElement } from "react-native-elements";
import { Colors } from "../../../Constants";

export default function Button({ onPress, type, title, backgroundColor, onLongPress, disabled, loading }) {
  return (
    <ButtonElement
      title={title || "Ok"}
      type={type || "solid"}
      onPress={onPress}
      buttonStyle={{ backgroundColor: backgroundColor || Colors.primary }}
      onLongPress={onLongPress}
      disabled={disabled}
      loading={loading}
    />
  );
}
