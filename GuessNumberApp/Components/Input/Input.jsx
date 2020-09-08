import React from "react";
import { Input as InputElement } from "react-native-elements";
import { StyleSheet } from "react-native";

export default function Input({
  leftIcon,
  placeholder,
  rightIcon,
  disabled,
  label,
  value,
  defaultValue,
  onChange,
  style,
  keyboardType,
  blurOnSubmit,
  maxLength,
}) {
  return (
    <InputElement
      placeholder={placeholder || "input"}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      disabled={disabled}
      label={label}
      keyboardType={keyboardType || "default"}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      style={{ ...styles.root, ...style }}
      blurOnSubmit={blurOnSubmit}
      maxLength={maxLength}
    />
  );
}

const styles = StyleSheet.create({
  root: {},
});
