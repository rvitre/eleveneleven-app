import { Dimensions, Platform, StatusBar } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flex: 1,
    alignItems: 'center'
  },

  drawerItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  drawerItemLabel: {
    color: "white",
    fontSize: 24,
    fontWeight: "300",
    textAlign: "center",
    lineHeight: 29
  },
  separator: {
    height: 1,
    backgroundColor: "rgba(255,255,255, 0.6)",
    marginTop: 28,
    marginBottom: 28
  },
});

export default styles;
