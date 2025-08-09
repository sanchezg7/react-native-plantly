import { Image, useWindowDimensions } from "react-native";

type Props = {
  size?: number;
  imageUri?: string;
};
export function PlantlyImage({ size, imageUri }: Props) {
  const { width } = useWindowDimensions();
  const imageSize = size || Math.min(width / 1.5, 400);
  return (
    // The required is needed because it will include this at bundle time, and this is a module that is brought in
    <Image
      style={{ width: imageSize, height: imageSize, borderRadius: 6 }}
      source={imageUri ? { uri: imageUri } : require("@/assets/plantly.png")}
    />
  );
}
