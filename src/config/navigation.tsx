import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SinglePlayerGame, Home } from "@screens";

export type StackNavigatorParams = {
  Home: undefined;
  // SinglePlayerGame: { gameId: string };
  SinglePlayerGame: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();

const defaultScreenOptions = { headerShown: false };

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SinglePlayerGame" component={SinglePlayerGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
