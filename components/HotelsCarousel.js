import { View, Text, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Carousel from 'react-native-snap-carousel';
import { hotelSlides } from '../constants/slides';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid';
import {BookmarkIcon} from 'react-native-heroicons/outline';

const { width, height } = Dimensions.get("window");

export default function HotelsCarousel() {
    const setAsBookMarked = ()=>{

    }

  return (
    <View style={tw`w-full mt-4`}>
      <View style={tw`flex flex-row justify-between items-center py-2`}>
        <Text style={tw`text-xl font-bold text-neutral-700`}>Popular Hotels</Text>
        <TouchableOpacity>
          <Text style={tw`text-base text-[#FF555B]`}>See All</Text>
        </TouchableOpacity>
      </View>

      <Carousel
        data={hotelSlides}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback style={tw`rounded-3xl overflow-hidden shadow-md relative`}>
            <>
                <Image source={item.image} style={tw`h-full w-[100%] rounded-2xl`} />
                <TouchableOpacity style={tw`bg-[#FF555D] absolute right-2 top-2 rounded-full py-1 px-3 flex flex-row items-center gap-2`}>
                    <StarIcon size={14} color={"white"}/>
                    <Text style={[{fontFamily: "Poppins-Bold"}, tw`text-white mt-1`]}>{item.rating}</Text>
                </TouchableOpacity>
                <View style={tw`absolute bottom-4 left-4`}>
                    <Text style={[{fontFamily:"Poppins-Bold"}, tw`text-white `]}>{item.name}</Text>
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
            </>
          </TouchableWithoutFeedback>
        )}
        firstItem={1}
        
        sliderWidth={width}
        itemWidth={width * 0.55}
        slideStyle={{ display: "flex", alignItems: "center", height: height * 0.35 }}
      />
    </View>
  );
}
