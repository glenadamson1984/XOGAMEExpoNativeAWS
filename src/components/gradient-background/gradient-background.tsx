import React from "react";
import { Text, View, Button, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../screens/home/home.styles";

const GradientBackground: React.FC = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#120318", "#221a36"]}
        style={styles.background}
      />
      {children}
    </View>
  );
};

export default GradientBackground;
