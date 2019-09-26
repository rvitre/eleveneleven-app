import { Image } from "react-native";
import * as images from "./index.js";

export default async () => {
  for (let image in images) {
    try {
      await Image.prefetch(images[image].uri);
    } catch (error) {}
  }
};
