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
  HandThumbUpIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { hotelSlides } from "../constants/slides";
import Bookmark from "../components/Bookmark";
import Modal from "react-native-modal";
import Booked from "../components/Booked";
const { width, height } = Dimensions.get("window");
export default function BookmarkScreen() {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [openedItem, setOpenedItem] = useState({});
  const openModal = (item) => {
    console.log(item);
    setOpenedItem(item);
    setShowModal(true);
  };
  return (
    <SafeAreaView style={[{ width }, tw` pt-10 pb-8`]}>
      <View
        style={[
          { width },
          tw`flex flex-row items-center justify-between gap-4 px-3`,
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
            My Bookmark
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
      <ScrollView style={tw`w-full mt-4 px-3 pb-8`}>
        {hotelSlides.map((slide, index) => (
          <>
            <Bookmark
              navigation={navigation}
              item={slide}
              key={index}
              open={() => openModal(slide)}
            />
          </>
        ))}
      </ScrollView>
      <Modal
        isVisible={showModal}
        style={tw`flex-1 items-center justify-center`}
      >
        <View
          style={[
            { width: width * 0.96 },
            tw`relative bg-white rounded-3xl flex flex-col items-center px-1 pt-4 pb-3`,
          ]}
        >
          <Text style={[{ fontFamily: "Poppins-Bold" }, tw`text-xl mb-4`]}>
            Remove from Bookmark?
          </Text>
          <Text
            style={[{ width: width * 0.96 }, tw`border border-neutral-200 h-0`]}
          ></Text>
          <Booked item={openedItem} />
          <View style={tw`w-full flex flex-row justify-center gap-4`}>
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={tw`w-[35%] flex py-3 mt-2 items-center justify-center bg-[#FF555B] rounded-3xl`}
            >
              <Text
                style={[
                  { fontFamily: "Poppins-Medium" },
                  tw`text-center text-white`,
                ]}
              >
                Remove
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={tw`w-[35%] flex py-3 mt-2 items-center justify-center bg-[#FFF] rounded-3xl`}
            >
              <Text
                style={[
                  { fontFamily: "Poppins-Medium" },
                  tw`text-center text-black`,
                ]}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
