import React from "react";
import { Button, Text, View } from "react-native";
import styles from "./game.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigatorParams } from "../../config/navigation";

type GameProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">;
};

const Game: React.FC<GameProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Game</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Game;
