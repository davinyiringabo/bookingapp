import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/solid";
export default function Searchbar() {
  return (
    <View style={tw`w-full mt-4 relative`}>
      <TextInput
        placeholder="Hotel, Flight, Place, Food ..."
        style={[
          { fontFamily: "Poppins-Medium" },
          tw`w-full border-2 border-neutral-300 py-2 px-3 pl-10 rounded-lg`,
        ]}
      />
      <TouchableOpacity style={tw`absolute right-3 top-3`}>
        <AdjustmentsHorizontalIcon size={26} color={"#ccc"} />
      </TouchableOpacity>
      <TouchableOpacity style={tw`absolute left-3 top-3`}>
        <MagnifyingGlassIcon size={26} color={"#ccc"} />
      </TouchableOpacity>
    </View>
  );
}
