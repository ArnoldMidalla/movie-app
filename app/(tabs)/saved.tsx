import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchSaved } from "@/Services/api";
import useFetch from "@/Services/useFetch";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import MovieCard from "../Components/MovieCard";

export default function Saved() {
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchSaved());

  return (
    <View className="bg-primary flex-1">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {moviesLoading ? (
          <ActivityIndicator
            size={"large"}
            color={"#0000ff"}
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ) : movies?.length === 0 ? (
          <Text>You have not saved a movie yet</Text>
        ) : (
          <View className="px-5">
            <Text className="text-xl text-white font-bold mb-3 text-center mt-5">
              Movies You've Saved
            </Text>
            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              columnWrapperStyle={{
                // justifyContent: "flex-start",
                justifyContent: "space-between",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}
            />
          </View>
        )}
        {/* <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.save} className="size-10" tintColor={"#fff"} />
        <Text className="text-gray-500 text-base text-center">
          Saved Movies
        </Text>
      </View> */}
      </ScrollView>
    </View>
  );
}
