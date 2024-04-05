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
import { hotelSlides } from "../constants/slides";
import Booked from "../components/Booked";
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
    icon: <CreditCardIcon size={27} color={"#ccc"} style={tw`font-bold`} />,
    text: "Payment",
    to: "PaymentSettings",
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
          <TouchableOpacity>
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
    </SafeAreaView>
  );
}
