import React, { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { LockClosedIcon } from "react-native-heroicons/solid";
import Toast from "react-native-toast-message";
const { width } = Dimensions.get("window");

export default function VerifyCodeScreen() {
  const navigation = useNavigation();
  const [codes, setCodes] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleInputChange = (text, index) => {
    let newCodes = [...codes];
    newCodes[index] = text;

    if (text.length === 1 && index < codes.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    setCodes(newCodes);
  };

  const handleSubmit = () => {
    const code = codes.join("");
    Toast.show({
      type: "success",
      text1: "Verification success 🥳!",
      text2: "Verification completed successfully!",
    });
    console.log("Submitted code:", code);
    navigation.navigate("Reset");
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
          Verify Code
        </Text>
        <Text
          style={[
            { fontFamily: "Poppins-Medium" },
            tw`text-center text-neutral-600`,
          ]}
        >
          Enter 6 digit verification sent to your email account
        </Text>
      </View>

      <View style={tw`border-2 border-neutral-200 rounded-xl w-[90%] p-3`}>
        <View style={tw`w-full flex flex-row items-center justify-between`}>
          {codes.map((code, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              keyboardType="numeric"
              maxLength={1}
              style={[
                { fontFamily: "Poppins-Medium" },
                tw`border border-neutral-200 p-2 px-4 mt-2 rounded-xl text-3xl flex items-center justify-center`,
              ]}
              value={code}
              onChangeText={(text) => handleInputChange(text, index)}
              onKeyPress={({ nativeEvent }) => {
                if (
                  nativeEvent.key === "Backspace" &&
                  code === "" &&
                  index > 0
                ) {
                  inputRefs.current[index - 1]?.focus();
                }
              }}
            />
          ))}
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={tw`w-full flex py-3 mt-2 items-center justify-center bg-[#FF555B] rounded-3xl`}
        >
          <Text
            style={[
              { fontFamily: "Poppins-Medium" },
              tw`text-center text-white`,
            ]}
          >
            Verify
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
    </SafeAreaView>
  );
}
