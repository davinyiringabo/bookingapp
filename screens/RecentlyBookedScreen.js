import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import {
  ArrowLeftIcon,
  AdjustmentsHorizontalIcon,
  DocumentTextIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { hotelSlides } from "../constants/slides";
import Booked from "../components/Booked";

const { width, height } = Dimensions.get("window");
export default function RecentlyBookedScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[{ width }, tw`bg-white pt-10 pb-8`]}>
      <View
        style={[
          { width },
          tw`flex flex-row items-center justify-between gap-4 px-2`,
        ]}
      >
        <View style={tw`flex flex-row gap-3`}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={tw``}>
            <ArrowLeftIcon size={27} color={"black"} style={tw`font-bold`} />
          </TouchableOpacity>
          <Text
            style={[
              { fontFamily: "Poppins-Bold" },
              tw`text-xl text-neutral-700`,
            ]}
          >
            Recently Booked
          </Text>
        </View>
        <View style={tw`flex flex-row gap-4`}>
          <TouchableOpacity style={tw``}>
            <DocumentTextIcon size={27} color={"red"} style={tw`font-bold`} />
          </TouchableOpacity>
          <TouchableOpacity style={tw``}>
            <AdjustmentsHorizontalIcon
              size={27}
              color={"black"}
              style={tw`font-bold`}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={tw`w-full mt-4 px-2 pb-8`}>
        <View style={tw`w-full flex flex-col items-center`}>
        {hotelSlides.map((slide, index) => {
          return <Booked navigation={navigation} item={slide} key={index} />;
        })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
