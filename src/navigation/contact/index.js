import React from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback, StatusBar, TouchableOpacity } from 'react-native';
import ContactUs from "../../containers/ContactUs";

import { headerDarkStyle, headerTransparentStyle } from "../styles";
import {
  HOME
} from "./navigationPaths";

export default {
  [HOME]: {
    screen: ContactUs,
    navigationOptions: headerDarkStyle({withoutBackButton: true}),
    navigationOptions: {
      headerTransparent: true
    }
  }
};