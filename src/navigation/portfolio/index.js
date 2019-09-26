import React from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback, StatusBar } from 'react-native';
import Portfolio from "../../containers/Portfolio";
import PortfolioDetail from "../../containers/PortfolioDetail";

import { headerLightStyle } from "../styles";
import {
  HOME,
  DETAIL
} from "./navigationPaths";

export default {
  [HOME]: {
    screen: Portfolio,
    navigationOptions:({ navigation }) => ({
      title: `11h11 Design & Communication`,
      headerStyle: {
        backgroundColor: 'black',
        color: 'white',
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
      },
      headerTintColor: 'white',
      headerForceInset: { top: 'never', bottom: 'never' }
    })
  },
  [DETAIL]: {
    screen: PortfolioDetail,
    path: 'portfolio/:name',
    //navigationOptions: headerLightStyle({ withoutBackButton: true })
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
      headerStyle: {
        backgroundColor: 'black',
        color: 'white',
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
      },
      headerTintColor: 'white',
      headerForceInset: { top: 'never', bottom: 'never' }
    }),
  }
};
