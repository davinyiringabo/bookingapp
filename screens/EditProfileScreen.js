import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import React from "react";
import tw from "twrnc";
import {
  ArrowLeftIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import DropdownComponent from "../components/SelectComponent";

const { width, height } = Dimensions.get("window");
const GENDER = [
  { label: 'Male', value: 'MALE' },
  { label: 'Female', value: 'FEMALE' },
];
const countries = [
  { label: 'Rwanda', value: 'Rwanda' },
  { label: 'Uganda', value: 'Uganda' },
  { label: 'United States', value: 'United States' },
  { label: 'Canada', value: 'Canada' },
];

export default function EditProfileScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[{ width, height }, tw` pt-10 pb-8 bg-white`]}>
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
            Edit Profile
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
      <ScrollView style={tw`w-full flex flex-col mt-4 px-2 pb-8`}>
        <View style={tw`w-full px-2`}>
          <TextInput name={"firstName"} placeholder="First Name" style={[{fontFamily: "Poppins-Medium"},tw`w-full py-4 rounded-xl border text-[#858585] border-neutral-200 pl-3`]}/>
        </View>
        <View style={tw`w-full px-2 mt-2`}>
          <TextInput name={"lastName"} placeholder="Last Name" style={[{fontFamily: "Poppins-Medium"},tw`w-full py-4 rounded-xl border text-[#858585] border-neutral-200 pl-3`]}/>
        </View>
        <View style={tw`w-full px-2 mt-2`}>
          <TextInput name={"phone"} placeholder="Phone Number" style={[{fontFamily: "Poppins-Medium"},tw`w-full py-4 rounded-xl border text-[#858585] border-neutral-200 pl-3`]}/>
        </View>
        <View style={tw`w-full px-2 mt-2`}>
          <TextInput name={"email"} placeholder="Email address" style={[{fontFamily: "Poppins-Medium"},tw`w-full py-4 rounded-xl border text-[#858585] border-neutral-200 pl-3`]}/>
        </View>
        <View style={tw`w-full px-2 mt-2`}>
          <DropdownComponent data={GENDER} placeholder={"Male"}/>
        </View>
        <View style={tw`w-full px-2 mt-2`}>
          <DropdownComponent data={countries} placeholder={"Rwanda"}/>
        </View>

        <TouchableOpacity style={tw`w-full py-4 mt-4 flex items-center justify-center rounded-full bg-[#FF555D]`}>
          <Text  style={[{ fontFamily: "Poppins-Bold" }, tw`text-center text-white`]}>Update</Text>
        </TouchableOpacity>
       
      </ScrollView>
    </SafeAreaView>
  );
}
