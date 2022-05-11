import React from "react";
import { Text, View, Button, ScrollView } from "react-native";
import styles from "./home.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GradientBackground } from "@components";
import { StackNavigatorParams } from "../../config/navigation";

type HomeProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Home</Text>
        <Button
          title="Game"
          onPress={() => navigation.navigate("Game", { gameId: "12" })}
        />
      </ScrollView>
    </GradientBackground>
  );
};

export default Home;
