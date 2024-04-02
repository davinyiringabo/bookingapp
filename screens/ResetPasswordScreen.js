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
  HandThumbUpIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

const { width, height } = Dimensions.get("window");
export default function ResetPasswordScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    navigation.navigate("Login");
  };
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
          Reset Password
        </Text>
        <Text
          style={[
            { fontFamily: "Poppins-Medium" },
            tw`text-center text-neutral-600`,
          ]}
        >
          Create a new password for your account
        </Text>
      </View>

      <View style={tw` rounded-xl w-[90%] p-3`}>
        <View style={tw`mt-2`}>
          <Text style={[{ fontFamily: "Poppins-Medium" }]}>New Password</Text>
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
          onPress={() => setShowModal(true)}
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
      <Modal
        isVisible={showModal}
        style={tw`flex-1 items-center justify-center`}
      >
        <View
          style={[
            { width: width * 0.9 },
            tw`relative bg-white rounded-3xl flex flex-col items-center px-1 pt-12 pb-3`,
          ]}
        >
          <View
            style={tw`absolute top-[-2.5rem] bg-[#FF555B] p-4 rounded-full`}
          >
            <HandThumbUpIcon size={50} color={"white"} />
          </View>
          <Text
            style={[
              { fontFamily: "Poppins-Bold" },
              tw`text-[#FF555B] text-2xl`,
            ]}
          >
            Bingo!
          </Text>
          <Text
            style={[
              { fontFamily: "Poppins-Bold" },
              tw`text-neutral-400 text-[0.8rem] text-center w-full`,
            ]}
          >
            Your password was changed successfully!
          </Text>
          <TouchableOpacity
            onPress={closeModal}
            style={tw`w-[70%] flex py-3 mt-2 items-center justify-center bg-[#FF555B] rounded-3xl`}
          >
            <Text
              style={[
                { fontFamily: "Poppins-Medium" },
                tw`text-center text-white`,
              ]}
            >
              Back to Login
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
