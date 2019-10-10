import React from "react";
import { Easing, Animated } from "react-native";
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

import PortfolioNavigation from "./portfolio";
import ContactNavigation from "./contact";
import PhotoMonthNavigation from "./photoMonth";
import { drawerStyle } from "./styles";

import {
  LOGIN,
  LOGGED_IN,
} from "./navigationPaths";

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 650,
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
    //transitionConfig
  }
);

const ContactStack = createStackNavigator(
  { ...ContactNavigation },
  {
    //transitionConfig
  }
);

const PhotoMonthStack = createStackNavigator(
  { ...PhotoMonthNavigation },
  {
    //transitionConfig,
  }
);


const MainDrawer = createDrawerNavigator(
  {
    PhotoMonth: PhotoMonthStack,
    Portfolio: PortfolioStack,
    Contact:  ContactStack,
  },
  {
    /*headerMode: 'none',
    drawerBackgroundColor: 'black',
    //minSwipeDistance: 20,
    hideStatusBar: true,
    contentComponent: props => <Drawer />,
    contentOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white'
    }*/
    ...drawerStyle
  }
);

const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);


const App = createSwitchNavigator({
  App:  AppModalStack
});







/**
 * Android
 * Prevents the app from closing on Back button press by returning null
 */
const prevGetStateForAction = AppModalStack.router.getStateForAction;
AppModalStack.router.getStateForAction = (action, state) => {
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
export default createAppContainer(AppModalStack);
