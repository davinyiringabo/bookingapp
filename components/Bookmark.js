import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  BookmarkIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";

const { width, height } = Dimensions.get("window");
export default function Booked({ item, open, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Hotel", item)}
      key={item.id}
      style={[
        tw` w-full flex flex-col justify-between bg-white rounded-2xl gap-2 py-2 my-2 px-2`,
      ]}
    >
      <Image
        source={item.image}
        style={tw`w-full h-[${height * 0.04}] rounded-xl`}
      />
      <View style={tw`w-full flex flex-row justify-between`}>
        <View style={tw`w-[60%] flex flex-col items-start justify-start`}>
          <Text
            style={[
              { fontFamily: "Poppins-Bold" },
              tw`text-neutral-700 w-full text-start text-lg`,
            ]}
          >
            {item.name}
          </Text>
          <View
            style={tw`flex flex-row items-center justify-start  gap-2 mt-[-0.4rem] ml-1`}
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
            style={tw`flex flex-row items-center justify-start gap-1 mt-1 ml-1`}
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
        <View>
          <TouchableOpacity
            style={tw` rounded-full py-1 px-3 flex flex-row items-center gap-2`}
          >
            <StarIcon size={14} color={"yellow"} />
            <Text
              style={[{ fontFamily: "Poppins-Bold" }, tw`text-[#FF555D] mt-1 `]}
            >
              {item.rating}
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              { fontFamily: "Poppins-Medium" },
              tw`text-neutral-500 text-[0.61rem] mt-[-0.7rem]`,
            ]}
          >
            ({"4,579"} reviews)
          </Text>
          <TouchableOpacity
            onPress={open}
            style={tw` rounded-xl py-2 px-3 flex flex-row items-end justify-end gap-2`}
          >
            <BookmarkIcon size={25} color={"red"} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
