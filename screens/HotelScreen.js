import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import tw from "twrnc";
import {
  AdjustmentsHorizontalIcon,
  BookmarkIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import { ArrowLeftIcon, HomeModernIcon } from "react-native-heroicons/solid";
import Carousel from "react-native-snap-carousel";
import { hotelSlides } from "../constants/slides";
import Booked from "../components/Booked";


const { width, height } = Dimensions.get("window");
export default function HotelScreen({navigation}) {
  const { params: item } = useRoute();
//   const navigation = useRoute();
  console.log("Hotel selected: ", item);
  return (
    <SafeAreaView style={[{width, height}, tw`flex flex-col justify-around bg-[#FAFAFA]`]}>
      <ScrollView style={[{ width, height: height * 0.88 }]}>
      <View style={[{width,  height: height * 0.43},tw`relative`]}>
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
      </View>
      <View style={[{width}, tw`px-3`]}>
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
          <ScrollView bounces={false} showsHorizontalScrollIndicator={false} horizontal style={tw`w-full flex flex-row gap-3 mt-3`}>
              <View style={[{width: width * 0.27, height: width * 0.25},tw` flex flex-col mr-2 items-center justify-center bg-[#FAFAFA] gap-y-1`]}>
                  <HomeModernIcon size={25} color={"#FF555B"}/>
                  <Text style={[{fontFamily:"Poppins-Medium", fontSize: width * 0.039}, tw` text-neutral-800`]}>Hotel</Text>
              </View>
              <View style={[{width: width * 0.27, height: width * 0.25},tw` flex flex-col mr-2 items-center justify-center bg-[#FAFAFA] gap-y-1`]}>
                  <HomeModernIcon size={25} color={"#FF555B"}/>
                  <Text style={[{fontFamily:"Poppins-Medium", fontSize: width * 0.039}, tw` text-neutral-800`]}>3 Bedrooms</Text>
              </View>
              <View style={[{width: width * 0.27, height: width * 0.25},tw` flex flex-col mr-2 items-center justify-center bg-[#FAFAFA] gap-y-1`]}>
                  <HomeModernIcon size={25} color={"#FF555B"}/>
                  <Text style={[{fontFamily:"Poppins-Medium", fontSize: width * 0.039}, tw` text-neutral-800`]}>2 Bathrooms</Text>
              </View>
              <View style={[{width: width * 0.27, height: width * 0.25},tw` flex flex-col mr-2 items-center justify-center bg-[#FAFAFA] gap-y-1`]}>
                  <HomeModernIcon size={25} color={"#FF555B"}/>
                  <Text style={[{fontFamily:"Poppins-Medium", fontSize: width * 0.039}, tw` text-neutral-800`]}>4500 sqft</Text>
              </View>
          </ScrollView>

          <View style={tw`flex flex-row items-center justify-between gap-3 mt-5 mb-1`}>
            <Text style={[{fontFamily:"Poppins-Bold"}, tw` text-lg text-neutral-800`]}>Gallery Photos</Text>
            <TouchableOpacity>
              <Text style={[{fontFamily:"Poppins-Bold"}, tw` text-[#FF555D]`]}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`flex`}>
            <Carousel
              data={hotelSlides}
              renderItem={({ item }) => (
                <Image source={item.image} style={tw`w-full h-full rounded-xl`}/>
              )}
              firstItem={1}
              sliderWidth={width}
              itemWidth={width * 0.55}
              itemHeight={width * 0.55}
              slideStyle={{
                display: "flex",
                alignItems: "center",
                height: height * 0.30,
              }}
            />
          </View>
          <View style={tw`pb-3`}>
              <Text style={[{fontFamily:"Poppins-Bold"}, tw` text-lg text-neutral-800 mt-5`]}>Description</Text>
              <Text style={[{fontFamily:"Poppins-Medium"}, tw` text-sm text-neutral-400 mt-2`]}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Text>
          </View>
          <Text style={[{fontFamily:"Poppins-Bold"}, tw` text-lg text-neutral-800 mt-5`]}>Location</Text>
          <Image source={require("../assets/images/map.jpeg")} style={[{height: height * 0.34},tw`rounded-2xl w-full`]}/>
          <View style={tw`w-full mt-4 pb-8`}>
        <View style={tw`flex flex-row justify-between items-center py-2`}>
          <Text
            style={[
              { fontFamily: "Poppins-Bold" },
              tw`text-xl text-neutral-700`,
            ]}
          >
            Review
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RecentBooking")}
          >
            <Text
              style={[
                { fontFamily: "Poppins-Medium" },
                tw`text-base text-[#FF555B]`,
              ]}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={tw`w-full flex flex-col items-center`}>
          {hotelSlides.slice(0, 3).map((slide, index) => {
            return <Booked navigation={navigation} item={slide} key={index} />;
          })}
        </View>
      </View>
      </View>
    </ScrollView>
    <View style={[{width, height: height * 0.12}, tw`flex flex-row items-center justify-between gap-5 pl-[10%] bg-white pr-3`]}>
    <View
            style={tw`flex flex-row items-center justify-end gap-1 mt-3`}
          >
            <Text
              style={[
                tw`text-neutral-700 text-xl`,
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
          <TouchableOpacity
              // onPress={() => setShowModal(false)}
              style={tw`w-[45%] h-[55%] flex py-3 mt-2 items-center justify-center bg-[#FF555B] rounded-3xl`}
            >
              <Text
                style={[
                  { fontFamily: "Poppins-Medium" },
                  tw`text-center text-white`,
                ]}
              >
                Book Now!
              </Text>
            </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
