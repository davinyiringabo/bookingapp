import { View, Text, Dimensions, Animated } from "react-native";
import React from "react";
import tw from "twrnc";

const { width } = Dimensions.get("window");
export default function Paginator({ data, scrollX }) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          height: 64,
          width,
          alignItems: "center",
          justifyContent: "center",
        },
        tw`absolute bottom-35`,
      ]}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX?.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={{
              width: dotWidth,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#FF555B",
              marginHorizontal: 8,
              opacity: opacity,
            }}
            key={i?.toString()}
          />
        );
      })}
    </View>
  );
}
