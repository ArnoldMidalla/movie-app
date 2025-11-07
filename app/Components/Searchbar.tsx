import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

export default function Searchbar ({ onPress }: any) {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-md px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        onPress={onPress}
        value=""
        // onChangeText={}
        placeholder="Search for a movie"
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};
