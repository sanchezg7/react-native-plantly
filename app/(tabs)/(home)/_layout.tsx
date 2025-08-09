import { Link, Stack } from "expo-router";
import { theme } from "@/theme";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          // asChild is needed bc we have a component in there, instead of raw text
          // hitSlop adds additional area for people to touch
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable
                hitSlop={20}
                style={{ marginRight: -10, marginBottom: -10 }}
              >
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
      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: "",
          headerTintColor: theme.colorBlack,
        }}
      ></Stack.Screen>
    </Stack>
  );
}
