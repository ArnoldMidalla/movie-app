import React from "react";
import { Text, View } from "react-native";

const MovieInfo = ({ label, value }: MovieInfoProps) => {
  return (
    <View className="flex-col items-start justify-center mt-5">
      <Text className="text-light-200 font-normal text-sm">{label}</Text>
      <Text className="text-light-200 font-bold text-sm mt-2">
        {value || "Nothing to see here"}
      </Text>
    </View>
  );
};

export default MovieInfo;
