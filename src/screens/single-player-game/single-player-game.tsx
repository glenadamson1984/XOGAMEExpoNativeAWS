import React from "react";
import { Button, Text, SafeAreaView } from "react-native";
import styles from "./single-player-game.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigatorParams } from "../../config/navigation";
import { GradientBackground } from "@components";

type SinglePlayerGameProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">;
};

const SinglePlayerGame: React.FC<SinglePlayerGameProps> = ({ navigation }) => {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Text style={{ color: "#fff" }}>This is a game isnt it</Text>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default SinglePlayerGame;
