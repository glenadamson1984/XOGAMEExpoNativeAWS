import React from "react";
import { StyleSheet, View } from "react-native";
import { FontWeight, Text } from "@components";
import {
  DeliusUnicase_400Regular,
  DeliusUnicase_700Bold,
  useFonts,
} from "@expo-google-fonts/delius-unicase";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontLoaded] = useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
  });

  if (!fontLoaded) return <AppLoading />;

  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 25 }}
        weight={FontWeight.BOLD}
        onPress={() => {
          alert(true);
        }}
      >
        Hello World
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
