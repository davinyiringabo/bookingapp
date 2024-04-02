import { View, Text, FlatList, Animated } from "react-native";
import React, { useState, useRef } from "react";
import tw from "twrnc";
import { slides } from "../constants/slides";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./paginator";
import Nextbutton from "./Nextbutton";
import { useNavigation } from "@react-navigation/native";
export default function Onboarding() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const slidesRef = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });
    }
    if (currentIndex == slides.length - 1) {
      navigation.navigate("Login");
    }
  };
  return (
    <View
      style={[
        tw`flex-1 items-center justify-center`,
        { backgroundColor: "hsla(358, 100%, 67%, 0)" },
      ]}
    >
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            },
          )}
          keyExtractor={(item) => item.id}
          bounces={false}
          scrollEventThrottle={32}
          ref={slidesRef}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <OnboardingItem item={item} />}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <Nextbutton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
    </View>
  );
}
