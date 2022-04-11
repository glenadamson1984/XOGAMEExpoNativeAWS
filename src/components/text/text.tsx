import React from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

export enum FontWeight {
  BOLD = "BOLD",
}

type TextProps = {
  weight?: FontWeight;
} & NativeTextProps;

const Text: React.FC<TextProps> = ({ children, style, weight, ...props }) => {
  return (
    <NativeText
      {...props}
      style={[
        {
          fontFamily:
            weight === FontWeight.BOLD
              ? "DeliusUnicase_700Bold"
              : "DeliusUnicase_400Regular",
        },
        style,
      ]}
    >
      {children}
    </NativeText>
  );
};

export default Text;
