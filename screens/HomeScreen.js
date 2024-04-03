import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import {
  BellIcon,
  HomeModernIcon,
  MapPinIcon,
  ChartBarIcon,
} from "react-native-heroicons/solid";
import Searchbar from "../components/Searchbar";
import HotelsCarousel from "../components/HotelsCarousel";
import { hotelSlides } from "../constants/slides";
import Booked from "../components/Booked";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

const colors = ["#FF555B", "#2ED573", "#8C7AE6", "#546DE5"];
const CategoryIcon = ({ icon, text, index }) => (
  <View
    style={tw`w-[${width * 0.09}] mt-4 mr-3 py-6 bg-[${colors[index]}] rounded-xl flex flex-col items-center gap-4`}
  >
    {icon}
    <Text
      style={[
        tw`text-lg text-white leading-[1.2rem]`,
        { fontFamily: "Poppins-Medium" },
      ]}
    >
      {text}
    </Text>
  </View>
);
export default function HomeScreen() {
  const navigation = useNavigation();
  const categories = [
    { icon: <HomeModernIcon size={30} color={"white"} />, text: "Home" },
    { icon: <ChartBarIcon size={30} color={"white"} />, text: "Flight" },
    { icon: <MapPinIcon size={30} color={"white"} />, text: "Place" },
    { icon: <HomeModernIcon size={30} color={"white"} />, text: "Hotel" },
  ];
  return (
    <ScrollView style={[{ width, height: height * 2 }, tw`mt-3 px-3`]}>
      <View style={tw`w-full flex flex-row justify-between items-center mt-5`}>
        <View style={tw`flex flex-row gap-2`}>
          <Image
            source={require("../assets/images/person.png")}
            style={[tw`w-12 h-12 rounded-full`, { resizeMode: "contain" }]}
          />
          <View style={tw`flex flex-col justify-end`}>
            <Text
              style={[
                tw`text-sm text-neutral-400 leading-[1.2rem]`,
                { fontFamily: "Poppins-Medium" },
              ]}
            >
              Hello
            </Text>
            <Text
              style={[
                tw`text-[1rem] text-neutral-700 leading-[1.2rem]`,
                { fontFamily: "Poppins-Bold" },
              ]}
            >
              {"Helia Dulia!"}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={tw`p-3 px-5 bg-[#FF555B] rounded-3xl`}
          onPress={() => navigation.navigate("Bookmarks")}
        >
          <BellIcon size={25} color={"white"} />
        </TouchableOpacity>
      </View>
      <Searchbar />
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.text}
        renderItem={({ item, index }) => (
          <CategoryIcon icon={item.icon} text={item.text} index={index} />
        )}
      />
      <HotelsCarousel />
      <View style={tw`w-full mt-4 pb-8`}>
        <View style={tw`flex flex-row justify-between items-center py-2`}>
          <Text
            style={[
              { fontFamily: "Poppins-Bold" },
              tw`text-xl text-neutral-700`,
            ]}
          >
            Recently Booked
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

        {hotelSlides.slice(0, 3).map((slide, index) => {
          return <Booked item={slide} key={index} />;
        })}
      </View>
    </ScrollView>
  );
}
