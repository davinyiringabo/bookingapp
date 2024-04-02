import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const { width, height } = Dimensions.get("window");
export default function OnboardingItem({ item }) {
  return (
    <View style={[{ width, height }, tw`flex items-center justify-center`]}>
      <Image
        source={item.image}
        style={[
          { width: width, height: height, resizeMode: "cover" },
          tw`flex justify-center `,
        ]}
      />
      <View style={tw`flex absolute z-20 bottom-50`}>
        <Text
          style={[
            { fontFamily: "Licorice-Regular" },
            tw`text-center text-7xl text-[#FF555B] leading-[7rem] mb-[-2rem]`,
          ]}
        >
          {item.upperstring}
        </Text>
        <Text
          style={[
            { fontFamily: "Poppins-Bold" },
            tw` text-center text-5xl text-white leading-[4rem]`,
          ]}
        >
          {item.middlestring}
        </Text>
        <Text
          style={[
            { fontFamily: "Montserrat-Black" },
            tw` text-center text-6xl text-[#2CC672]`,
          ]}
        >
          {item.lowerstring}
        </Text>
        <Text
          style={[
            { fontFamily: "Poppins-Medium" },
            tw`text-center text-white text-lg`,
          ]}
        >
          {item.subtitle}
        </Text>
      </View>
    </View>
  );
}
