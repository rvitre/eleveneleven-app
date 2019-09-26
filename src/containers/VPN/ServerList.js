import React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

//!!CONFIG simulate header config
const hasHeader = false;

const ServerList = () => {
  return (
    <View style={{flex:1}}>
      <Text>ServerList page</Text>
    </View>
  );
};

//!!CONFIG simulate header config
hasHeader ? null :
ServerList.navigationOptions = {
  header: null,
};

export default ServerList;
