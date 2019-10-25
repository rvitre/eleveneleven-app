/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useEffect} from "react";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { StatusBar, StyleSheet, View } from "react-native";
import Navigation from "./navigation";
import EStyleSheet from "react-native-extended-stylesheet";
import SplashScreen from 'react-native-splash-screen';

EStyleSheet.build({
  $theBlue: "#07c", // global var available across all EStylesheets
  $headerHeight: 45,
  //$outline: 1, // will outline all components
});

console.disableYellowBox = true;

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <StatusBar
            translucent
            backgroundColor="black"
            barStyle="light-content"
          />
          <View style={styles.container}>
            <Navigation />
          </View>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});

export default App;
