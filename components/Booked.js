import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { BookmarkIcon, MapPinIcon } from 'react-native-heroicons/solid';

const {width, height} = Dimensions.get("window");
export default function Booked({item}) {
  return (
    <View key={item.id} style={[{width}, tw`flex flex-row justify-between bg-white rounded-2xl py-2 my-1 px-2`]}>
      <View style={tw`flex flex-row`}>
        <Image source={item.image} style={tw` w-20 h-20 rounded-xl`}/>
        <View>
            <View style={tw`absolute bottom-4 left-4 flex flex-col items-center`}>
                <Text style={[{fontFamily:"Poppins-Bold"}, tw`text-neutral-700 `]}>{item.name}</Text>
                <View style={tw`flex flex-row items-center gap-2`}>
                    <MapPinIcon size={14} color={"#CCC"}/>
                    <Text style={[{fontFamily: "Poppins-Medium"}, tw`text-[#CCC]`]}>{item.location}</Text>
                </View>
                <View style={tw`flex flex-row items-center gap-1`}>
                    <Text style={[tw`text-[#CCC] text-xl`,{fontFamily:"Poppins-Bold"}]}>{item.price}</Text>
                    <Text style={[{fontFamily: "Poppins-Medium"}, tw`text-[#CCC]`]}>/ per night</Text>
                </View>
            </View>
            <TouchableOpacity style={tw`absolute right-2 bottom-4 rounded-xl py-2 px-3 flex flex-row items-center gap-2`}>
                <BookmarkIcon size={25} color={"white"}/>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}