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
export default function NotificationSettingsScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[{ width }, tw` pt-10 pb-8`]}>
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
            Notifications
          </Text>
        </View>
        <TouchableOpacity style={tw``}>
          <AdjustmentsHorizontalIcon
            size={27}
            color={"black"}
            style={tw`font-bold`}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={tw`w-full mt-4 px-2 pb-8`}>
        <Text style={[{ fontFamily: "Poppins-Bold" }, tw`text-center`]}>
          Help Screen
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
