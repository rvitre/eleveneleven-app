import { StyleSheet } from "react-native";
import { ApplicationStyles } from "../../themes";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  iconContainer: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1
  },
  formTitle: {
    fontSize: 22,
    fontWeight: "bold"
  },
  authContainer: {
    backgroundColor: "#01a8f7",
    flex: 1,
    justifyContent: "center",
    width: "100%"
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 30,
    margin: 20,
    borderRadius: 15,
    alignItems: "center"
  },
  topImage: {
    flex: 1,
    resizeMode: "contain",
    width: "85%"
  }
});
