import { View, Text, TouchableOpacity, Animated } from "react-native";
import React from "react";
import { Svg, G, Circle } from "react-native-svg";
import tw from "twrnc";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import { useEffect, useRef } from "react";

export default function Nextbutton({ percentage, scrollTo }) {
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);
  const size = 96;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    animation(percentage);
  }, [percentage]);
  useEffect(() => {}, []);
  return (
    <View
      style={[
        { backgroundColor: "hsla(358, 100%, 67%, 0)" },
        tw`absolute z-20 bottom-10`,
      ]}
    >
      <Svg width={size} height={size}>
        <Circle
          ref={progressRef}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (circumference * 25) / 100}
          fill="none"
          stroke="#FF555B"
        />
      </Svg>
      <TouchableOpacity
        onPress={scrollTo}
        activeOpacity={0.6}
        style={[tw`absolute bg-[#FF555B] rounded-full p-7`]}
      >
        <ChevronRightIcon size={32} color={"#FFF"} />
      </TouchableOpacity>
    </View>
  );
}
