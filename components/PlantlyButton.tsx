import { theme } from "@/theme";
import { StyleSheet, Text, Pressable } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

/**
 * Implemeneted from here https://kadikraman.github.io/intermediate-react-native-v2-course/docs/custom-button/
 * @constructor
 */
export function PlantlyButton({ title, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

// I remember why I liked styled components, you could use css-like attributes to define components
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: theme.colorGreen,
  },
});
