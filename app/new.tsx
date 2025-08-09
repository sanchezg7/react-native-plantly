import {
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { usePlantStore } from "@/store/plantsStore";
import { theme } from "@/theme";
import { PlantlyButton } from "@/components/PlantlyButton";
import { useState } from "react";
import { PlantlyImage } from "@/components/PlantlyImage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";

export default function NewScreen() {
  const router = useRouter();
  const addPlant = usePlantStore((state) => state.addPlant);
  const [name, setName] = useState<string>();
  const [days, setDays] = useState<string>();
  const [imageUri, setImageUri] = useState<string>();

  const handleSubmit = () => {
    // This won't work on web, you could encapsulate around that, however.
    if (!name) {
      return Alert.alert("Validation Error", "Give your plant a name");
    }

    if (!days) {
      return Alert.alert(
        "Validation Error",
        `How often does ${name} need to be watered?`,
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Validation Error",
        "Watering frequency must be a be a number",
      );
    }

    console.log("Adding plant", name, days);
    addPlant(name, Number(days), imageUri);
    // router.navigate("/");
    router.back();
  };

  const handleChooseImage = async () => {
    if (Platform.OS === "web") {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      // allows the user to crop the image to the specified size
      allowsEditing: true,
      // square, so that it just fits nicely in the screen
      aspect: [1, 1],
      // max quality
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };
  // ScrollView just in case there isn't enough space to render on different devices
  // keyboardShouldPersist allows the keyboard not to be dismissed even when we hit the Add Plant button
  // Adding the KeyboardAwareScrollView to prevent the keyboard from stepping over the input
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity
        style={styles.centered}
        onPress={handleChooseImage}
        activeOpacity={0.8}
      >
        <PlantlyImage imageUri={imageUri} />
      </TouchableOpacity>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="E.g. Casper the Cactus"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Watering Frequency (every x days)</Text>
      <TextInput
        value={days}
        onChangeText={setDays}
        style={styles.input}
        placeholder="E.g. 6"
        keyboardType="number-pad"
      />
      <PlantlyButton
        title="Add plant"
        onPress={handleSubmit}
        textAlign="center"
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colorLightGrey,
    padding: 12,
    borderRadius: 6,
    marginBottom: 24,
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  centered: {
    alignItems: "center",
    marginBottom: 24,
  },
});
