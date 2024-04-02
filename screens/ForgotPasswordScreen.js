import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView style={[tw`flex-1 items-center mt-3`, { width }]}>
      <View
        style={tw`mt-[${width * 0.2}] flex flex-col justify-center items-center mb-6`}
      >
        <LockClosedIcon size={60} color={"#FF555B"} style={tw`mb-2`} />
        <Text
          style={[
            { fontFamily: "Poppins-Bold" },
            tw`text-3xl text-neutral-700`,
          ]}
        >
          Forgot Password
        </Text>
        <Text
          style={[
            { fontFamily: "Poppins-Medium" },
            tw`text-center text-neutral-600`,
          ]}
        >
          Lets recover your password, its simple.
        </Text>
      </View>

      <View style={tw` rounded-xl w-[90%] p-3`}>
        <View>
          <Text style={[{ fontFamily: "Poppins-Medium" }]}>Your Email</Text>
          <TextInput
            placeholder="Enter Your Email"
            style={[
              { fontFamily: "Poppins-Medium" },
              tw`border border-neutral-200 p-2 mt-2 rounded-xl`,
            ]}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Verify")}
          style={tw`w-full flex py-3 mt-2 items-center justify-center bg-[#FF555B] rounded-3xl`}
        >
          <Text
            style={[
              { fontFamily: "Poppins-Medium" },
              tw`text-center text-white`,
            ]}
          >
            Send Code
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`w-90% p-3`}>
        <View style={tw`w-full flex flex-row items-center justify-end mt-2`}>
          <Text
            style={[
              { fontFamily: "Poppins-Medium" },
              tw`text-neutral-500 text-center`,
            ]}
          >
            Or
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text
              style={[
                { fontFamily: "Poppins-Medium" },
                tw`text-[#FF555B] ml-1`,
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
