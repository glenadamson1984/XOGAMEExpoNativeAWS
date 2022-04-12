import React from "react";
import {
  DeliusUnicase_400Regular,
  DeliusUnicase_700Bold,
  useFonts,
} from "@expo-google-fonts/delius-unicase";
import AppLoading from "expo-app-loading";

const AppBootstrap: React.FC = ({ children }) => {
  const [fontLoaded] = useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
  });

  if (!fontLoaded) return <AppLoading />;

  return <>{children}</>;
};

export default AppBootstrap;
