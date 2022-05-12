import React from "react";
import { View, Image, ScrollView } from "react-native";
import styles from "./home.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GradientBackground } from "@components";
import { StackNavigatorParams } from "../../config/navigation";
import { Button } from "@components";

type HomeProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
        <View style={styles.buttons}>
          <Button
            style={styles.button}
            title="Single Player"
            onPress={() => navigation.navigate("SinglePlayerGame")}
          />
          <Button style={styles.button} title="Multiplayer" />
          <Button style={styles.button} title="Login" />
          <Button style={styles.button} title="Settings" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default Home;
