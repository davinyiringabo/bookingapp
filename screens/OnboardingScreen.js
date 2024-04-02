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

// <Onboarding
//   pages={[
//     {
//       backgroundColor: '#051B26',
//       image: <Image source={require('../assets/images/onb1.png')} />,
//       title: 'Explore the Unseen World',
//       subtitle: 'Discover the world with us',
//     },
//     {
//       backgroundColor: '#051B26',
//       image: <Image source={require('../assets/images/onb2.png')} />,
//       title: 'Travel Comfortably and Easily',
//       subtitle: 'Travel made easy in your hand',
//     },
//     {
//       backgroundColor: '#051B26',
//       image: <Image source={require('../assets/images/onb3.png')} />,
//       title: 'Find the Best Hotels for Your Vacation',
//       subtitle: 'Enjoy the best vacation with us',
//     },
//   ]}
//   nextLabel=""
//   showNext={true}
//   showSkip={false}
//   NextButtonComponent={({ onPress }) => (
//     <View
//       style={tw`w-[3rem] h-[3rem] p-1 flex-1 items-center justify-center rounded-full bg-[#F83B42]`}
//     >
//       <HeartIcon size={20} color="white" onPress={onPress} />
//     </View>
//   )}
// />
