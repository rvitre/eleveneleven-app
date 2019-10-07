import React from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback, StatusBar, TouchableOpacity } from 'react-native';
import Portfolio from "../../containers/Portfolio";
import PortfolioDetail from "../../containers/PortfolioDetail";

import { headerDarkStyle } from "../styles";
import {
  HOME,
  DETAIL
} from "./navigationPaths";

export default {
  [HOME]: {
    screen: Portfolio,
    navigationOptions: headerDarkStyle({withoutBackButton: true , title: 'Portfolio'})
  },
  [DETAIL]: {
    screen: PortfolioDetail,
    path: 'portfolio/:name',
    //navigationOptions: headerLightStyle({ withoutBackButton: true })
    navigationOptions: headerDarkStyle({withoutBackButton: false}),
    mode: 'card',
    headerMode: 'float'
  }
};


const headerStyleMain = ({ withoutBackButton = false }) => ({
  navigation
}) => ({
  headerStyle: {
    backgroundColor: 'black',
    color: 'white',
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    shadowColor: 'transparent',
    marginBottom: -2,
    borderBottomWidth: 0,
  }
});