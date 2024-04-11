import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import {
  ArrowLeftIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/solid";
import {
  PencilIcon,
  UserIcon,
  BellIcon,
  CreditCardIcon,
  MoonIcon,
  QuestionMarkCircleIcon,
  ArrowLeftStartOnRectangleIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Booked from "../components/Booked";
import Modal from "react-native-modal";

const buttons = [
  {
    icon: <UserIcon size={25} color={"#ccc"} style={tw`font-bold`} />,
    text: "Edit Profile",
    to: "EditProfile",
  },
  {
    icon: <BellIcon size={27} color={"#ccc"} style={tw`font-bold`} />,
    text: "Notification",
    to: "NotificationSettings",
  },
  {
    icon: (
      <QuestionMarkCircleIcon size={27} color={"#ccc"} style={tw`font-bold`} />
    ),
    text: "Help",
    to: "HelpSettings",
  },
];
const { width, height } = Dimensions.get("window");
export default function ProfileScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
          tw`flex flex-row items-center justify-between gap-4 px-2`,
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
            Profile
          </Text>
        </View>
        <View style={tw`flex flex-row gap-4`}>
          <TouchableOpacity style={tw``}>
            <AdjustmentsHorizontalIcon
              size={27}
              color={"black"}
              style={tw`font-bold`}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={tw`w-full mt-4 px-2 pb-8`}>
        <View style={tw`w-full flex flex-col items-center`}>
          <Image
            source={require("../assets/images/person.png")}
            style={[
              {
                width: width * 0.28,
                height: height * 0.2,
                resizeMode: "contain",
              },
            ]}
          />
          <View style={tw`relative w-3/5 flex flex-row justify-center`}>
            <Text style={[{ fontFamily: "Poppins-Bold" }, tw`text-lg`]}>
              Helia Dulia
            </Text>
            <TouchableOpacity style={tw`absolute right-8`}>
              <PencilIcon size={20} color={"red"} />
            </TouchableOpacity>
          </View>
          <Text
            style={[
              { fontFamily: "Poppins-Bold" },
              tw`text-sm text-neutral-400`,
            ]}
          >
            heliadulia@gmail.com
          </Text>
        </View>

        <View style={tw`w-full flex flex-col gap-2 mt-4 pb-6`}>
          {buttons.map((button, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate(button.to)}
              >
                <View
                  style={tw`w-full bg-white rounded-2xl flex flex-row items-center justify-start px-4 py-4 gap-2`}
                >
                  {button.icon}
                  <Text
                    style={[
                      { fontFamily: "Poppins-Medium" },
                      tw`text-sm text-neutral-400`,
                    ]}
                  >
                    {button.text}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity>
            <View
              style={tw`w-full bg-white rounded-2xl flex flex-row items-center justify-between px-4 py-2 gap-2`}
            >
              <View style={tw`flex flex-row gap-2`}>
                <MoonIcon size={24} color={"#ccc"} style={tw`font-bold`} />
                <Text
                  style={[
                    { fontFamily: "Poppins-Medium" },
                    tw`text-sm text-neutral-400`,
                  ]}
                >
                  Dark Theme
                </Text>
              </View>
              <Switch onValueChange={toggleSwitch} value={isEnabled} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setShowModal(true)}>
            <View
              style={tw`w-full bg-white rounded-2xl flex flex-row items-center justify-start px-4 py-4 gap-2`}
            >
              <ArrowLeftStartOnRectangleIcon
                size={27}
                color={"#FF555B"}
                style={tw`font-bold`}
              />
              <Text
                style={[
                  { fontFamily: "Poppins-Medium" },
                  tw`text-sm text-[#FF555D]`,
                ]}
              >
                Log Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        isVisible={showModal}
        style={tw`flex-1 items-center justify-center`}
      >
        <View
          style={[
            { width: width * 0.96 },
            tw`relative bg-white rounded-3xl flex flex-col items-center px-3 pt-4 pb-3`,
          ]}
        >
          <Text style={[{ fontFamily: "Poppins-Bold" }, tw`text-xl text-[#FF555D]`]}>
            Log out
          </Text>
          <Text style={[{ fontFamily: "Poppins-Bold" }, tw`my-4`]}>
            Are you sure you want to log out?
          </Text>
          <Text
            style={[tw`w-full border border-neutral-200 h-0`]}
          ></Text>
          <View style={tw`w-full flex flex-col justify-center gap-4 mt-3`}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={tw`w-full flex py-3 mt-2 items-center justify-center bg-[#FF555B] rounded-3xl`}
            >
              <Text
                style={[
                  { fontFamily: "Poppins-Medium" },
                  tw`text-center text-white`,
                ]}
              >
                Yes, Logout
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={tw`w-full flex py-3 mt-2 items-center justify-center bg-[#FFF] rounded-3xl`}
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
