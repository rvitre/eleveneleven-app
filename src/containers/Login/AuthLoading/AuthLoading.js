import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { CYBER_HOME, LOGIN } from "../../../navigation/navigationPaths";
import { _fetch } from "../../../utils/Fetch";
import SplashScreen from "../../../components/CustomSplashScreen/SplashScreen";
import { setLocaleFromRemote } from "../../../i18n/remoteLocale";
import { StoreContext } from "../../../context/store/storeContext";
import config from "../../../config";

const AuthLoading = props => {
  const { state, actions } = useContext(StoreContext);
  const [isConnected, setIsConnected] = useState(false);
  const [themeConfig, setThemeConfig] = useState({});
  const [localeConfig, setLocaleConfig] = useState({});
  const [callPending, setCallPending] = useState(-1);

  const increasePendingCall = () =>
    setCallPending(callPending => (callPending === -1 ? 1 : callPending + 1));
  const decreasePendingCall = () =>
    setCallPending(callPending => callPending - 1);

  /**
   * @param {Promise} call
   */
  const addToQueue = call => {
    increasePendingCall();
    return call.finally(() => {
      decreasePendingCall();
    });
  };

  /**
   * @param {String} url
   */
  const doRequest = url => {
    return addToQueue(_fetch(url));
  };

  const getLocales = async () => {
    let receivedLocales = [];
    config.locales.forEach(locale => {
      doRequest(`${config.REMOTE_STORAGE_URL}/i18n/${locale.code}.json`)
        .then(data => {
          let newArray = [
            ...receivedLocales,
            { code: locale.code, texts: data }
          ];
          receivedLocales = newArray;
          setLocaleConfig(receivedLocales);
        })
        .catch(err => console.error(err));
    });
  };

  const getTheme = async () => {
    doRequest(`${config.REMOTE_STORAGE_URL}/theme/main.json`)
      .then(data => setThemeConfig(data))
      .catch(err => console.error(err));
  };

  const getConfig = async () => {
    getTheme();
    getLocales();
  };

  useEffect(() => {
    getConfig();
  }, []);

  const installLocales = () => {
    if (!process.env.NODE_ENV === "development") {
      setLocaleFromRemote(localeConfig);
    }
  };

  const installTheme = () => {
    actions.themeActions.setTheme(themeConfig);
  };

  useEffect(() => {
    //add logic here
    const route = isConnected ? CYBER_HOME : LOGIN;

    if (callPending === 0) {
      installTheme();
      installLocales();
      props.navigation.navigate(route);
    }
  }, [themeConfig, localeConfig]);

  return (
    <View style={{ flex: 1 }}>
      <SplashScreen />
    </View>
  );
};

export default AuthLoading;
