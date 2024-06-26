import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  BookmarkIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";

const { width, height } = Dimensions.get("window");
export default function Booked({ item, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Hotel", item)}
      key={item.id}
      style={[
        { elevation: 3 },
        tw` w-[99%] flex flex-row justify-between bg-white rounded-2xl py-2 my-2 px-2`,
      ]}
    >
      <View style={tw`flex flex-row gap-3`}>
        <Image source={item.image} style={tw` w-20 h-20 rounded-xl`} />
        <View style={tw`w-[73%] flex flex-row justify-between`}>
          <View style={tw`w-[60%] flex flex-col items-center justify-start`}>
            <Text
              style={[
                { fontFamily: "Poppins-Bold" },
                tw`text-neutral-700 w-full text-start text-lg`,
              ]}
            >
              {item.name}
            </Text>
            <View
              style={tw`flex flex-row items-center gap-2 mt-[-0.4rem] ml-[-2rem]`}
            >
              <MapPinIcon size={14} color={"#CCC"} />
              <Text
                style={[
                  { fontFamily: "Poppins-Medium" },
                  tw`text-[#CCC] text-[0.71rem]`,
                ]}
              >
                {item.location}
              </Text>
            </View>
            <View
              style={tw`flex flex-row items-center justify-start gap-1 mt-1 ml-[-1.8rem]`}
            >
              <Text
                style={[
                  tw`text-neutral-700 text-lg`,
                  { fontFamily: "Poppins-Bold" },
                ]}
              >
                {item.price}
              </Text>
              <Text
                style={[
                  { fontFamily: "Poppins-Medium" },
                  tw`text-neutral-700 text-[0.71rem]`,
                ]}
              >
                / per night
              </Text>
            </View>
          </View>
          <View style={tw`flex flex-col items-end justify-start pr-4`}>
            <TouchableOpacity
              style={tw` rounded-full py-1 px-3 flex flex-row items-center gap-2`}
            >
              <StarIcon size={14} color={"yellow"} />
              <Text
                style={[
                  { fontFamily: "Poppins-Bold" },
                  tw`text-[#FF555D] mt-1 `,
                ]}
              >
                {item.rating}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw` rounded-xl py-2 px-3 flex flex-row items-end justify-end gap-2`}
            >
              <BookmarkIcon size={25} color={"red"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
