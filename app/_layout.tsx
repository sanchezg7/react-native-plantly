import { Stack } from "expo-router";

// There is no index page, but we need an index path
// There is an index file in /app/(tabs)/index -> which resolves to /(tabs)/index which resolves to /index
export default function Layout() {
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
    </Stack>
  );
}
