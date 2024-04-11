import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Switch
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import {
  ArrowLeftIcon,
  AdjustmentsHorizontalIcon,
  DocumentTextIcon,
  MoonIcon
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { hotelSlides } from "../constants/slides";
import Booked from "../components/Booked";

const { width, height } = Dimensions.get("window");
export default function NotificationSettingsScreen() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
            Notifications
          </Text>
        </View>
        <TouchableOpacity style={tw``}>
          <AdjustmentsHorizontalIcon
            size={27}
            color={"black"}
            style={tw`font-bold`}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={tw`w-full mt-4 px-2 pb-8`}>
            <View
              style={tw`w-full rounded-2xl flex flex-row items-center justify-between px-4 gap-2`}
            >
              <View style={tw`flex flex-row gap-2`}>
                <Text
                  style={[
                    { fontFamily: "Poppins-Medium" },
                    tw`text-sm text-neutral-700`,
                  ]}
                >
                  General Notification
                </Text>
              </View>
              <Switch onValueChange={toggleSwitch} value={isEnabled} />
            </View>
            <View
              style={tw`w-full rounded-2xl flex flex-row items-center justify-between px-4 gap-2`}
            >
              <View style={tw`flex flex-row gap-2`}>
                <Text
                  style={[
                    { fontFamily: "Poppins-Medium" },
                    tw`text-sm text-neutral-700`,
                  ]}
                >
                  Sound
                </Text>
              </View>
              <Switch onValueChange={toggleSwitch} value={isEnabled} />
            </View>
            <View
              style={tw`w-full rounded-2xl flex flex-row items-center justify-between px-4 gap-2`}
            >
              <View style={tw`flex flex-row gap-2`}>
                <Text
                  style={[
                    { fontFamily: "Poppins-Medium" },
                    tw`text-sm text-neutral-700`,
                  ]}
                >
                  App Updates
                </Text>
              </View>
              <Switch onValueChange={toggleSwitch} value={isEnabled} />
            </View>
            <View
              style={tw`w-full rounded-2xl flex flex-row items-center justify-between px-4 gap-2`}
            >
              <View style={tw`flex flex-row gap-2`}>
                <Text
                  style={[
                    { fontFamily: "Poppins-Medium" },
                    tw`text-sm text-neutral-700`,
                  ]}
                >
                  New Service Available
                </Text>
              </View>
              <Switch onValueChange={toggleSwitch} value={isEnabled} />
            </View>
            <View
              style={tw`w-full rounded-2xl flex flex-row items-center justify-between px-4 gap-2`}
            >
              <View style={tw`flex flex-row gap-2`}>
                <Text
                  style={[
                    { fontFamily: "Poppins-Medium" },
                    tw`text-sm text-neutral-700`,
                  ]}
                >
                  New tips Available
                </Text>
              </View>
              <Switch onValueChange={toggleSwitch} value={isEnabled} />
            </View>
      </ScrollView>
    </SafeAreaView>
  );
}
