import React from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback, StatusBar, TouchableOpacity } from 'react-native';
import PhotoMonth from "../../containers/PhotoMonth";

import { headerDarkStyle, headerTransparentStyle } from "../styles";
import {
  HOME
} from "./navigationPaths";

export default {
  [HOME]: {
    screen: PhotoMonth,
    navigationOptions: {
      headerTransparent: true,
      header: null
    }
  }
};