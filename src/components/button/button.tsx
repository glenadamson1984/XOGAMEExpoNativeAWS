import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "@components";
import styles from "./button.styles";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

const Button: React.FC<ButtonProps> = ({ title, style, ...props }) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
