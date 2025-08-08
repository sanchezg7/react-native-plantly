import { Tabs } from "expo-router";
// https://icons.expo.fyi/Index
import { Entypo } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", tabBarIcon: () => <Entypo name="leaf" /> }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <Entypo name="feather" />,
        }}
      />
    </Tabs>
  );
}
