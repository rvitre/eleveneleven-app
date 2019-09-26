/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";
import Navigation from "./navigation";
import EStyleSheet from "react-native-extended-stylesheet";
import { StoreProvider } from "./context/store/storeContext";

EStyleSheet.build({
  $theBlue: "#07c", // global var available across all EStylesheets
  $headerHeight: 45,
  $outline: 1, // will outline all components
});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StoreProvider>
          <StatusBar
            translucent
            backgroundColor="black"
            barStyle="light-content"
          />
          <View style={styles.container}>
            <Navigation />
          </View>
        </StoreProvider>
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

module.hot.accept(() => {
  EStyleSheet.clearCache();
  EStyleSheet.build(); // force style re-calculation
});

export default App;
