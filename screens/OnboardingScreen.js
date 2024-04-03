import React from "react";
import { View, Text, Dimensions, Platform, Image } from "react-native";
import tw from "twrnc";
import { useFonts } from "expo-font";
// import Onboarding from 'react-native-onboarding-swiper';
import { HeartIcon } from "react-native-heroicons/solid";
import Onboarding from "../components/Onboarding";
// SplashScreen.preventAutoHideAsync();
const { width, height } = Dimensions.get("window");
const ios = Platform.OS;

export default function OnboardingScreen() {
  const [fontsLoaded, fontError] = useFonts({
    "Montserrat-Black": require("../assets/Fonts/montserrat/Montserrat-Black.ttf"),
    "Poppins-Medium": require("../assets/Fonts/poppins/Poppins-Medium.ttf"),
    "Poppins-Extrabold": require("../assets/Fonts/poppins/Poppins-ExtraBold.ttf"),
    "Poppins-Bold": require("../assets/Fonts/poppins/Poppins-Bold.ttf"),
    "Licorice-Regular": require("../assets/Fonts/loricce/Licorice-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Onboarding />;
}
