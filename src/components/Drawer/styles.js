import { Dimensions, Platform, StatusBar } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  paddingContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: "space-around",
    flex: 1
  },

  closeButtonContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  closeButtonSize: {
    height: 22,
    width: 22
  },
  closeButtonPadding: {
    paddingBottom: Dimensions.get("window").height < 690 ? 0 : 20,
    marginTop: 20
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
  drawerItemLabelLight: {
    color: "white",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    lineHeight: 22
  },

  separator: {
    height: 1,
    backgroundColor: "rgba(255,255,255, 0.6)",
    marginTop: 28,
    marginBottom: 28
  },

  homeButtonContainer: {
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 20
  },
  homeButtonIcon: {
    resizeMode: "contain",
    height: 51,
    width: 46
  },
  homeButtonLabel: {
    marginTop: 16,
    color: "white",
    fontSize: 18
  }
  /* putElementToRight: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  } */
});

export default styles;
