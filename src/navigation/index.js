import React from "react";
import { View, Platform, StatusBar, Dimensions, Easing, Animated } from "react-native";
import {
  createStackNavigator
} from "react-navigation-stack";
import {
  createDrawerNavigator
} from "react-navigation-drawer";
/*import {
  createBottomTabNavigator
} from "react-navigation-tabs";*/
import {
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import config from "../config";
import { drawerStyle } from "./styles";

import AuthLoading from "../containers/Login/AuthLoading/AuthLoading";
import LoginForm from "../containers/Login/LoginForm/LoginForm";
import SignicatLogin from "../containers/Login/SignicatLogin/SignicatLogin";
import Home from "../containers/Home/Home";
import ExitPrompt from "../containers/ExitPrompt";
import VPN from "../containers/VPN/VPN";

import HomeNavigation from "./home";
import VPNNavigation from "./vpn";
import PortfolioNavigation from "./portfolio";

import {
  LOADING,
  CYBER_HOME,
  LOGIN,
  VPN_HOME,
  LOGGED_IN,
  PORTFOLIO_HOME
} from "./navigationPaths";

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {      
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}

// Portfolio screen stack
const PortfolioStack = createStackNavigator(
  { ...PortfolioNavigation },
  {
    transitionConfig,
    headerForceInset: { top: 'never', bottom: 'never' }
  }
);

/**
 * Android
 * Prevents the app from closing on Back button press by returning null
 */
const prevGetStateForAction = PortfolioStack.router.getStateForAction;
PortfolioStack.router.getStateForAction = (action, state) => {
  console.log("NavigationState", action, state);

  if (
    action.type === "Navigation/BACK" &&
    state &&
    state.routes[state.index].routeName === LOGGED_IN
  ) {
    if (!state.routes[state.index].index) {
      //if first item of the BottomTab stack (index = 0)
      return null;
    }
  }
  if (
    action.type === "Navigation/BACK" &&
    state &&
    state.routes[state.index].routeName === LOGIN
  ) {
    return null;
  }

  return prevGetStateForAction(action, state);
};

//export default createAppContainer(AppSwitchNavigator);
export default createAppContainer(PortfolioStack);
