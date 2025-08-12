import { Stack } from "expo-router";
import { useEffect } from "react";
import * as QuickActions from "expo-quick-actions";
import { Platform } from "react-native";
import { useQuickActionRouting, RouterAction } from "expo-quick-actions/router";

// const QuickActions = {
//   setItems: () => {},
// };

// There is no index page, but we need an index path
// There is an index file in /app/(tabs)/index -> which resolves to /(tabs)/index which resolves to /index
export default function Layout() {
  // Enable linking to the `href` param when a quick action is used
  useQuickActionRouting();

  useEffect(() => {
    // Max, generally is 3-4 actions. Anything more is a bad user experience
    // Registration has to happen to register the actions
    QuickActions.setItems<RouterAction>([
      {
        id: "0",
        title: "Add a plant",
        icon: Platform.OS === "ios" ? "symbol:leaf" : "leaf",
        params: { href: "/new" },
      },
    ]);
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="onboarding"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="new"
        options={{ presentation: "modal", title: "New plant" }}
      />
    </Stack>
  );
}
