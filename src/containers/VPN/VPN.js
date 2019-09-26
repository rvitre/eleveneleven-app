import React, { useEffect, useState, useContext } from "react";
import { View, Text, ScrollView  } from "react-native";
import { StoreContext } from "../../context/store/storeContext";
import config from "../../config";

//!!CONFIG simulate header config
const hasHeader = config.vpn.headerActive;

const VPN = (props) => {
    const { state, actions } = useContext(StoreContext);
    

    return (
      <View style={{ flex: 1 }}>
        {hasHeader ? <Header /> : null}
        <ScrollView style={{ flex: 1 }}>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
          <Text style={{marginTop: 100}}>VPN page ...</Text>
        </ScrollView>
      </View>
    );
};

export default VPN;
