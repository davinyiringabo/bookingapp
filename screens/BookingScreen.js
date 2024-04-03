import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
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
export default function BookingScreen() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("ongoing");
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
            My Booking
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
      <View style={tw`w-full flex flex-row justify-between mt-5 px-2`}>
            <TouchableOpacity onPress={()=> setSelected("ongoing")} style={tw`p-2 px-3 flex items-center ${selected === "ongoing" ? "bg-[#FF555D]": "border border-neutral-300"} rounded-full`}>
              <Text style={[{fontFamily:"Poppins-Bold"}, tw`${selected === "ongoing" ? "text-white": "text-neutral-400"}`]}>Ongoing</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setSelected("completed")} style={tw`p-2 px-3 flex items-center  ${selected === "completed" ? "bg-[#FF555D]": "border border-neutral-300"} rounded-full`}>
              <Text style={[{fontFamily:"Poppins-Bold"}, tw`${selected === "completed" ? "text-white": "text-neutral-400"}`]}>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setSelected("cancelled")} style={tw`p-2 px-3 flex items-center  ${selected === "cancelled" ? "bg-[#FF555D]": "border border-neutral-300"} rounded-full`}>
              <Text style={[{fontFamily:"Poppins-Bold"}, tw`${selected === "cancelled" ? "text-white": "text-neutral-400"}`]}>Cancelled</Text>
            </TouchableOpacity>
      </View>
      <ScrollView style={tw`w-full mt-4 px-2 pb-8`}>
        {hotelSlides.map((slide, index) => {
          return <Booked item={slide} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
