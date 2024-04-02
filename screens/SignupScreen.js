import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export default function SignupScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ScrollView style={[{ width }]}>
      <View style={tw`w-full flex-1 items-center mt-3 pb-3`}>
        <View style={tw`mt-[${width * 0.2}] mb-6`}>
          <Text
            style={[
              { fontFamily: "Poppins-Bold" },
              tw`text-3xl text-neutral-700`,
            ]}
          >
            Sign Up to
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

        <View style={tw`border-2 border-neutral-200 rounded-xl w-[90%] p-3`}>
          <View>
            <Text style={[{ fontFamily: "Poppins-Medium" }]}>Your Name</Text>
            <TextInput
              placeholder="Enter Your Name"
              style={[
                { fontFamily: "Poppins-Medium" },
                tw`border border-neutral-200 p-2 mt-2 rounded-xl`,
              ]}
            />
          </View>
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
            <Text style={[{ fontFamily: "Poppins-Medium" }]}>
              Create Password
            </Text>
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

          <TouchableOpacity
            style={tw`w-full flex py-3 mt-2 items-center justify-center bg-[#FF555B] rounded-3xl`}
          >
            <Text
              style={[
                { fontFamily: "Poppins-Medium" },
                tw`text-center text-white`,
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`border-2 border-neutral-200 rounded-xl w-90% p-3 mt-2`}>
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
          <View
            style={tw`w-full flex flex-row items-center justify-center mt-2`}
          >
            <Text
              style={[
                { fontFamily: "Poppins-Medium" },
                tw`text-center text-black`,
              ]}
            >
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={[
                  { fontFamily: "Poppins-Medium" },
                  tw`text-[#FF555B] ml-1`,
                ]}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
