import { Image, useWindowDimensions } from "react-native";

export function PlantlyImage({ size }: { size?: number }) {
  const { width } = useWindowDimensions();
  const imageSize = size || Math.min(width / 1.5, 400);
  return (
    // The required is needed because it will include this at bundle time, and this is a module that is brought in
    <Image
      source={require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
