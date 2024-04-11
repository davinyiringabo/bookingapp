import React, { useState } from "react";
import { View, Text, Dimensions, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import { ArrowLeftIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import Accordion from 'react-native-collapsible/Accordion';

const { width, height } = Dimensions.get("window");

export default function HelpSettingsScreen() {
  const navigation = useNavigation();
  const [activeSections, setActiveSections] = useState([]);

  const _updateSections = (sections) => {
    setActiveSections(sections);
  };

  const FAQ_CONTENT = [
    {
      question: "How do I book a hotel?",
      answer: "You can book a hotel by selecting your desired location, check-in and check-out dates, and then choosing a hotel from the available options. After selecting a hotel, proceed to the booking page and follow the instructions to complete your reservation.",
    },
    {
      question: "Can I modify my booking?",
      answer: "Yes, you can modify your booking depending on the hotel's policies. Some hotels allow modifications such as changing dates or room types, while others may have restrictions. It's best to check the hotel's cancellation and modification policies before making changes to your booking.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "Most hotels accept major credit cards such as Visa, Mastercard, and American Express. Some hotels may also accept alternative payment methods like PayPal or bank transfers. You can usually find accepted payment methods listed on the hotel's booking page.",
    },
  ];

  return (
    <SafeAreaView style={[{ width, height }, tw`pt-10 pb-8 bg-white`]}>
      <View style={[{ width }, tw`flex flex-row items-center justify-between gap-4 px-2`]}>
        <View style={tw`flex flex-row gap-3`}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={tw``}>
            <ArrowLeftIcon size={27} color={"black"} style={tw`font-bold`} />
          </TouchableOpacity>
          <Text style={[{ fontFamily: "Poppins-Bold" }, tw`text-xl text-neutral-700`]}>
            Help
          </Text>
        </View>
        <TouchableOpacity style={tw``}>
          <AdjustmentsHorizontalIcon size={24} color={"black"} style={tw`font-bold`} />
        </TouchableOpacity>
      </View>
      <ScrollView style={tw`w-full mt-4 px-2 pb-8`}>
        <Text style={[{ fontFamily: "Poppins-Bold" }, tw`text-center text-xl mb-4`]}>
          Help Screen
        </Text>
        <View style={tw`bg-gray-100 rounded-lg p-4 mb-4`}>
          <Text style={[tw`text-lg font-semibold text-neutral-700 mb-2`, { fontFamily: "Poppins-Bold" }]}>
            Frequently Asked Questions
          </Text>
          <Accordion
          activeSections={activeSections}
          sections={FAQ_CONTENT.map((item, index) => ({
            title: item.question,
            content: item.answer,
          }))}
          renderHeader={(section) => <Text style={[tw`font-semibold text-neutral-700 my-2 `, { fontFamily: "Poppins-Bold" }]}> {section.title}</Text>}
          renderContent={(section) => <Text style={[tw`text-base text-neutral-600 text-sm mb-2 pl-2`, { fontFamily: "Poppins-Medium" }]}>{section.content}</Text>}
          onChange={_updateSections}
          underlayColor="hsla(360 100% 100% / 0.05)"
        />
        </View>
        <View style={tw`bg-gray-100 rounded-lg p-4 mb-4`}>
          <Text style={[tw`text-lg font-semibold text-neutral-700 mb-2`, { fontFamily: "Poppins-Bold" }]}>
            Contact Us
          </Text>
          <Text style={[tw`text-base text-neutral-600 text-sm`, { fontFamily: "Poppins-Medium" }]}>
            Phone: +250793245434
          </Text>
          <Text style={[tw`text-base text-neutral-600 text-sm`, { fontFamily: "Poppins-Medium" }]}>
            Email: nyiringabodavid62@gmail.com
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
