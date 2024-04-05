import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import {
  ArrowLeftIcon,
  AdjustmentsHorizontalIcon,
  CheckIcon,
  CreditCardIcon,
  KeyIcon,
} from "react-native-heroicons/solid";
import {
  InformationCircleIcon,
  XCircleIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { notifications } from "../constants/notifications";

const { width, height } = Dimensions.get("window");

export default function NotificationsScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[{ width }, tw`pt-10 pb-8`]}>
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
            Notification
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
      <ScrollView style={tw`w-full mt-4 px-3 pb-8`}>
        {notifications.map((notification, index) => (
          <React.Fragment key={notification.id}>
            {(index === 0 ||
              notifications[index - 1].date !== notification.date) && (
              <Text style={[{ fontFamily: "Poppins-Bold" }, tw`text-xl mt-4`]}>
                {notification.date}
              </Text>
            )}
            <View style={tw`mt-2 rounded-xl p-3 flex flex-row gap-3 bg-white`}>
              {notification.type === "success" ? (
                <View style={tw`p-3 rounded-lg bg-[#00FF00]`}>
                  <CheckIcon color={"white"} size={20} />
                </View>
              ) : notification.type === "unsuccess" ? (
                <View style={tw`p-3 rounded-lg bg-[#FF5E76]`}>
                  <XCircleIcon color={"white"} size={20} />
                </View>
              ) : notification.type === "security" ? (
                <View style={tw`p-3 rounded-lg bg-[#1C342D]`}>
                  <KeyIcon color={"white"} size={20} />
                </View>
              ) : notification.type === "payment" ? (
                <View style={tw`p-3 rounded-lg bg-[#FFD300]`}>
                  <CreditCardIcon color={"white"} size={20} />
                </View>
              ) : (
                <View style={tw`p-3 rounded-lg bg-[#00FF00]`}>
                  <InformationCircleIcon color={"white"} size={20} />
                </View>
              )}

              <View>
                <Text style={[{ fontFamily: "Poppins-Bold" }, tw`text-lg`]}>
                  {notification.title}
                </Text>
                <Text
                  style={[
                    { fontFamily: "Poppins-Bold" },
                    tw`text-[0.71rem] text-neutral-400`,
                  ]}
                >
                  {notification.body}
                </Text>
              </View>
            </View>
          </React.Fragment>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
