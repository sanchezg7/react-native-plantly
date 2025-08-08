import { Tabs } from "expo-router";
// https://icons.expo.fyi/Index
import { Entypo } from "@expo/vector-icons";

// You can define your own tab bar if you want
export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="feather" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
