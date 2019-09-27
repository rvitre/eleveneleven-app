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
      headerLeft: <Image source={require('../../assets/images/logo-11h11.png')} style={{marginLeft: 8, width: 50, height: 50, resizeMode: 'contain'}} />,
      headerTitle: '11h11 Design & Communication',
      headerStyle: {
        backgroundColor: 'black',
        color: 'white',
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
        shadowColor: 'transparent',
        marginBottom: -2
      },
      headerTintColor: 'white',
      headerForceInset: { top: 'never', bottom: 'never', vertical: 'never' },
    }),
    headerLayoutPreset: 'center',
  },
  [DETAIL]: {
    screen: PortfolioDetail,
    path: 'portfolio/:name',
    //navigationOptions: headerLightStyle({ withoutBackButton: true })
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.item.title}`,
      headerStyle: {
        backgroundColor: 'black',
        color: 'white',
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
        marginBottom: -2,
      },
      headerTintColor: 'white',
      headerForceInset: { top: 'never', bottom: 'never', vertical: 'never' },
      
    }),
    mode: 'card',
    headerMode: 'float'
  }
};
