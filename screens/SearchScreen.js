import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import {
  ArrowLeftIcon,
  AdjustmentsHorizontalIcon,
  DocumentTextIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { hotelSlides } from "../constants/slides";
import Booked from "../components/Booked";
import { booking } from "../constants/bookings";
import BookItem from "../components/BookItem";
import Searchbar from "../components/Searchbar";

const { width, height } = Dimensions.get("window");
export default function SearchScreen() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("ongoing");
  const [filtered, setFiltered] = useState(booking);
  useEffect(() => {
    if (selected === "ongoing") {
      setFiltered(booking.filter((item) => item.status === "paid"));
    } else if (selected === "completed") {
      setFiltered(booking.filter((item) => item.status === "completed"));
    } else if (selected === "cancelled") {
      setFiltered(booking.filter((item) => item.status === "cancelled"));
    }
  }, [selected]);
  return (
    <SafeAreaView style={[{ width }, tw`bg-white pt-10 pb-8`]}>
      <View
        style={[
          { width },
          tw`flex flex-row items-center justify-between gap-4 px-2`,
        ]}
      >
        <Searchbar/>
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
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={tw`w-full flex flex-row gap-3 mt-5 px-2`}>
        <TouchableOpacity
          onPress={() => setSelected("ongoing")}
          style={tw`p-2 px-3 mr-5 flex items-center ${selected === "ongoing" ? "bg-[#FF555D]" : "border border-neutral-300"} rounded-full`}
        >
          <Text
            style={[
              { fontFamily: "Poppins-Bold" },
              tw`${selected === "ongoing" ? "text-white" : "text-neutral-400"} text-sm`,
            ]}
          >
            All Hotels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected("completed")}
          style={tw`p-2 px-3 mr-5 flex items-center  ${selected === "completed" ? "bg-[#FF555D]" : "border border-neutral-300"} rounded-full`}
        >
          <Text
            style={[
              { fontFamily: "Poppins-Bold" },
              tw`${selected === "completed" ? "text-white" : "text-neutral-400"}`,
            ]}
          >
            Recommended
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected("cancelled")}
          style={tw`p-2 px-3 mr-5 flex items-center  ${selected === "cancelled" ? "bg-[#FF555D]" : "border border-neutral-300"} rounded-full`}
        >
          <Text
            style={[
              { fontFamily: "Poppins-Bold" },
              tw`${selected === "cancelled" ? "text-white" : "text-neutral-400"}`,
            ]}
          >
            Tranding
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected("ongoing")}
          style={tw`p-2 px-3 mr-5 flex items-center ${selected === "ongoing" ? "bg-[#FF555D]" : "border border-neutral-300"} rounded-full`}
        >
          <Text
            style={[
              { fontFamily: "Poppins-Bold" },
              tw`${selected === "ongoing" ? "text-white" : "text-neutral-400"} text-sm`,
            ]}
          >
            High Ranking
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={[{width}, tw`flex flex-row justify-between px-2 my-3 items-center`]}>
        <Text style={[{fontFamily:"Poppins-Bold"}, tw`text-lg`]}>{selected}</Text>
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
      <ScrollView style={tw`w-full h-[80%] mt-4 px-2 pb-8 `}>
        <View style={tw`w-full flex flex-col items-center`}>
        {filtered.length > 0 ? (
          filtered.map((slide, index) => {
            return (
              <Booked navigation={navigation} item={slide} key={index} />
            );
          })
        ) : (
          <View
            style={tw`w-full flex flex-col items-center justify-center mt-4`}
          >
            <Image
              source={require("../assets/images/empty-box.png")}
              style={tw`w-30 h-30`}
            />
            <Text style={[{ fontFamily: "Poppins-Bold" }, tw``]}>
              No {selected} bookings found!
            </Text>
          </View>
        )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
