import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function MovieCard({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}: Movie) {
  // console.log(id, title, poster_path, vote_average, release_date);
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="flex flex-1 gap-2">
        <Image
          source={{
            uri: poster_path
              ? `https://media.themoviedb.org/t/p/w500${poster_path}`
              : `https://placehold.co/600*400/1a1a1a/ffffff.png`,
          }}
          className="w-40 h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="font-bold text-white" numberOfLines={1}>
          {title.length > 20 ? title.substring(0, 17) + "..." : title}
        </Text>
        <View className="flex flex-row items-center justify-between w-40">
          <View className="flex-row items-center justify-start gap-x-1">
            <Image source={icons.star} className="size-4" />
            {/* <Text className="text-white">{Math.round(vote_average/2)}</Text> */}
            <Text className="text-white text-sm font-bold uppercase">
              {Math.round(vote_average)}
            </Text>
          </View>
          <Text className="text-sm text-light-300 font-medium">
            {release_date?.split("-")[0]}
          </Text>
        </View>
        {/* <View className="flex-row items-center justify-between">
          <Text className="text-sm text-light-300 font-medium mt-1">
            {release_date?.split("-")[0]}
          </Text>
          <Text className="text-sm font-medium text-light-300 uppercase">
            Movie
          </Text>
        </View> */}
      </TouchableOpacity>
    </Link>
  );
}
