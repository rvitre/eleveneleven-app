import { StyleSheet } from "react-native";
import { ApplicationStyles } from "../../themes";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  buttonContainer: {
    backgroundColor: "#000",
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    width: "100%"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18
  },
  buttonContainerSec: {
    backgroundColor: "#1F1A38",
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    width: "100%"
  },
  buttonTextSec: {
    color: "#758a95",
    textAlign: "center",
    fontSize: 18
  },
  linkContainer: {
    padding: 10,
    marginTop: 5
  }
});
