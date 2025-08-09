import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore.ts";
import { useRouter } from "expo-router";

// Implicitly defined by the filesystem but this creates a link so they IDE can detect
export const route = "/onboarding";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  const handlePress = () => {
    toggleHasOnboarded();
    // we use replace because we don't want users to go back
    router.replace("/");
  };
  return (
    <View style={styles.container}>
      <Button title="Let me in" onPress={handlePress} />
      <Text style={styles.text}>Onboarding</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
