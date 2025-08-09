// A button component that won't collide names with another button
import { Pressable, Text, StyleSheet } from "react-native";
import { theme } from "@/theme";

type Props = {
  title: string;
  onPress: () => void;
};

/**
 * Implemeneted from here https://kadikraman.github.io/intermediate-react-native-v2-course/docs/custom-button/
 * @constructor
 */
export default function PlantlyButton({ title, onPress }: Props) {
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
    borderRadius: 10,
    backgroundColor: theme.colorGreen,
  },
});
