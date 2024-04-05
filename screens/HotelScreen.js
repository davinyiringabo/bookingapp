import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import tw from "twrnc";
import {
  AdjustmentsHorizontalIcon,
  BookmarkIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const { width, height } = Dimensions.get("window");
export default function HotelScreen({navigation}) {
  const { params: item } = useRoute();
//   const navigation = useRoute();
  console.log("Hotel selected: ", item);
  return (
    <ScrollView style={[{ width }, tw]}>
      <View style={[{width, height},tw`relative`]}>
        <View
          style={[
            { width },
            tw`flex z-20 flex-row items-center justify-between gap-4 px-3 mt-8`,
          ]}
        >
          <View style={tw`flex flex-row gap-3`}>
            <TouchableOpacity onPress={() => navigation.goBack} style={tw``}>
              <ArrowLeftIcon size={27} color={"white"} style={tw`font-bold`} />
            </TouchableOpacity>
          </View>
          <View style={tw`flex flex-row gap-4`}>
            <TouchableOpacity style={tw``}>
              <BookmarkIcon size={27} color={"white"} style={tw`font-bold`} />
            </TouchableOpacity>
            <TouchableOpacity style={tw``}>
              <AdjustmentsHorizontalIcon
                size={27}
                color={"white"}
                style={tw`font-bold`}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Image source={item.image} style={[{width, height: height * 0.4},tw`absolute z-19 top-0`]}/>
        <View style={[{width, marginTop: height * 0.35}, tw`px-3`]}>
            <Text style={[{fontFamily:"Poppins-Bold"}, tw` text-2xl text-neutral-800`]}>{item.name}</Text>
            <View style={tw`flex flex-row items-center gap-2 `}>
              <MapPinIcon size={19} color={"red"} />
              <Text
                style={[
                  { fontFamily: "Poppins-Medium" },
                  tw`text-neutral-500 text-sm ml-[-0.4rem]`,
                ]}
              >
                {item.location}
              </Text>
            </View>
            <Text style={[tw`w-full border border-neutral-200 h-0 mt-5`]}></Text>
            <Text style={[{fontFamily:"Poppins-Bold"}, tw` text-lg text-neutral-800 mt-5`]}>Details</Text>
        </View>
      </View>
    </ScrollView>
  );
}
