import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function PlantDetail() {
  const params = useLocalSearchParams();
  console.log(params);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: "Plant name",
    });
  });
  return (
    <View>
      <Text>Plant Detail</Text>
    </View>
  );
}
