import { Redirect, Tabs, Link } from "expo-router";
// https://icons.expo.fyi/Index
import { AntDesign, Entypo } from "@expo/vector-icons";
import { theme } from "@/theme";
import { route as onboarding } from "@/app/onboarding";
import { useUserStore } from "@/store/userStore";
import { Pressable } from "react-native";

// const hasFinishedOnboarding = false;

// You can define your own tab bar if you want
export default function Layout() {
  // We listen to one field at a time, to avoid multiple rerenders for fields that are in this state even if we don't necessarily use it in this component
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding,
  );
  if (!hasFinishedOnboarding) {
    return <Redirect href={onboarding} />;
  }
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
          // asChild is needed bc we have a component in there, instead of raw text
          // hitSlop adds additional area for people to touch
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={20} style={{ marginRight: 18 }}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={theme.colorGreen}
                />
              </Pressable>
            </Link>
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
