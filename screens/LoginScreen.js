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
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const { width, height } = Dimensions.get("window");
export default function LoginScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView style={[tw`flex-1 items-center mt-3`, { width }]}>
      <View style={tw`mt-[${width * 0.2}] mb-6`}>
        <Text
          style={[
            { fontFamily: "Poppins-Bold" },
            tw`text-3xl text-neutral-700`,
          ]}
        >
          Welcome back
        </Text>
        <Text
          style={[
            { fontFamily: "Poppins-Medium" },
            tw`text-center text-neutral-600`,
          ]}
        >
          To your favorite Book app.
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
        <View style={tw`mt-2`}>
          <Text style={[{ fontFamily: "Poppins-Medium" }]}>Your Password</Text>
          <View style={tw`relative`}>
            <TextInput
              placeholder="Enter Your Password"
              secureTextEntry={!showPassword}
              style={[
                { fontFamily: "Poppins-Medium" },
                tw`border border-neutral-200 p-2 mt-2 rounded-xl`,
              ]}
            />
            {showPassword ? (
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={tw`absolute z-20 right-0 top-2 px-3 py-4`}
              >
                <EyeSlashIcon size={18} color={"black"} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={tw`absolute z-20 right-0 top-2 px-3 py-4`}
                onPress={() => setShowPassword(!showPassword)}
              >
                <EyeIcon size={18} color={"black"} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={tw`w-full flex flex-row justify-end mt-1`}>
          <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
            <Text
              style={[
                { fontFamily: "Poppins-Medium" },
                tw`text-center text-[#FF555B]`,
              ]}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={tw`w-full flex py-3 mt-2 items-center justify-center bg-[#FF555B] rounded-3xl`}
          onPress={() => navigation.navigate("App")}
        >
          <Text
            style={[
              { fontFamily: "Poppins-Medium" },
              tw`text-center text-white`,
            ]}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw` rounded-xl w-90% p-3 mt-2`}>
        <Text
          style={[
            { fontFamily: "Poppins-Medium" },
            tw`text-neutral-500 text-center`,
          ]}
        >
          Or Continue With
        </Text>
        <View style={tw`flex flex-row items-center justify-between px-3`}>
          <TouchableOpacity
            style={tw`py-2 px-3 flex flex-row items-center gap-2 border-2 border-neutral-200 rounded-3xl`}
          >
            <Image
              style={tw`w-6 h-6`}
              width={10}
              height={10}
              source={require("../assets/images/google.png")}
            />
            <Text
              style={[
                { fontFamily: "Poppins-Medium" },
                tw`text-neutral-500 text-center`,
              ]}
            >
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`py-2 px-3 flex flex-row items-center gap-2 border-2 border-neutral-200 rounded-3xl`}
          >
            <Image
              style={tw`w-6 h-6`}
              width={10}
              height={10}
              source={require("../assets/images/facebook.png")}
            />
            <Text
              style={[
                { fontFamily: "Poppins-Medium" },
                tw`text-neutral-500 text-center`,
              ]}
            >
              Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`w-full flex flex-row items-center justify-center mt-2`}>
          <Text
            style={[
              { fontFamily: "Poppins-Medium" },
              tw`text-center text-black`,
            ]}
          >
            Don’t have any account?{" "}
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
        <Toast />
      </View>
    </SafeAreaView>
  );
}
