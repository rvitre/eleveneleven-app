import React, { Image, useState, useEffect } from "react";
import { View, Platform, AppState } from "react-native";
import { useBackHandler } from "react-native-hooks";
import { useNavigation } from "react-navigation-hooks";
import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-community/async-storage";
import { LOGIN } from "../../navigation/navigationPaths";
import Header from "../../components/Header/Header/";

import styles from "./styles";
import config from "../../config";
import { SafeAreaView } from "react-navigation";

//!!CONFIG simulate header config
const hasHeader = config.cyberWebview.headerActive;

const Home = props => {
  const [token, setToken] = useState(0);
  const [canGoBack, setCanGoBack] = useState(false);
  const [webview, setWebview] = useState(null);
  const [overrideBackButton, setOverrideBackButton] = useState(true);
  const { navigate } = useNavigation();

  retrieveToken = async tokenName => {
    try {
      const value = await AsyncStorage.getItem(tokenName);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Executed only once
  useEffect(() => {
    retrieveToken("cyberToken").then(data => setToken(data));
    AppState.addEventListener("change", handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);

  handleAppStateChange = apps => {
    console.log("handleAppStateChange", apps);
  };

  /**
   * Restrain back button override to this container only
   */
  useEffect(() => {
    const didFocusSubscription = props.navigation.addListener("didFocus", () =>
      setOverrideBackButton(true)
    );
    const didBlurSubscription = props.navigation.addListener("didBlur", () =>
      setOverrideBackButton(false)
    );

    return () => {
      didFocusSubscription.remove();
      didBlurSubscription.remove();
    };
  }, []);

  /**
   * Hook
   * Overrides Android back button
   */
  useBackHandler(() => {
    if (canGoBack && webview && overrideBackButton) {
      webview.goBack();
      return true;
    }
    return false;
  });

  /**
   * Handler for "log out" event from webview
   */
  onWebviewLogout = () => {
    navigate(LOGIN);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {hasHeader ? <Header withoutBackButton={true} /> : null}
      {token !== 0 ? (
        <WebView
          ref={itself => {
            setWebview(itself);
          }}
          source={{
            uri: `https://cattolica.stage-affinionservices.com/sso-auth-portal?token=${token}`
          }}
          //style={hasHeader ? styles.cyberWebview : styles.headerlessWebview}
          onNavigationStateChange={navState => {
            setCanGoBack(navState.canGoBack);
          }}
          injectedJavaScript={`
            (function() {
              function wrap(fn) {
                return function wrapper() {
                  var res = fn.apply(this, arguments);
                  window.ReactNativeWebView.postMessage('navigationStateChange');
                  return res;
                }
              }

              history.pushState = wrap(history.pushState);
              history.replaceState = wrap(history.replaceState);
              window.addEventListener('popstate', function() {
                window.ReactNativeWebView.postMessage('navigationStateChange');
              });
            })();
            true;
          `}
          onMessage={({ nativeEvent: state }) => {
            if (state.data === "navigationStateChange") {
              setCanGoBack(state.canGoBack);
            }
            /** if (state.url.includes('/HelpDesk/true')) {
              onWebviewLogout();
            }*/
          }}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default Home;
