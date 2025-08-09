import { FlatList, StyleSheet } from "react-native";
import { theme } from "@/theme";
import { usePlantStore } from "@/store/plantsStore";
import { PlantlyButton } from "@/components/PlantlyButton";
import { useRouter } from "expo-router";
import { PlantCard } from "@/components/PlantCard";

/**
 *  Flatlist is optimized for the viewable area for mobile devices, to avoid using array.map which will create memory for all
 *  elements and lead to a bad experience because of performance
 */
export default function App() {
  const router = useRouter();
  const plants = usePlantStore((state) => state.plants);
  // reminder to create a default screen to add your first plant if there is none there. From the refactoring UI guides

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => {
            router.navigate("/new");
          }}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
