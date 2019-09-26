import React, { PureComponent, useEffect } from "react";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { useNavigation } from 'react-navigation-hooks';
import {
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  Animated,
  ScrollView
} from "react-native";
import styles from './styles';

const DrawerItem = ({ onPress, label = "Item" }) => (
  <TouchableOpacity style={styles.drawerItemContainer} onPress={onPress}>
    <Text style={styles.drawerItemLabel}>{label}</Text>
  </TouchableOpacity>
);

export default Drawer = props => {
  const navigation = useNavigation();
  const translateX = props.drawerOpenProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0]
  });

  return (
    <Animated.View style={{ transform: [{ translateX }] }}>
      {
        <ScrollView>
          <SafeAreaView
            style={{
              container: {
                flex: 1,
                background: "red"
              }
            }}
            forceInset={{ top: "always", horizontal: "never" }}
          >
            <DrawerItem
              label={"Test"}
              onPress={() => {
                navigation.navigate("LOGGED_IN");
                StatusBar.setBarStyle("dark-content", true);
                navigation.closeDrawer();
              }}
            />
            <DrawerItem
              label={"Test"}
              onPress={() => {
                navigation.navigate("LOGGED_IN");
                StatusBar.setBarStyle("dark-content", true);
                navigation.closeDrawer();
              }}
            />
            <DrawerItem
              label={"Test"}
              onPress={() => {
                navigation.navigate("LOGGED_IN");
                StatusBar.setBarStyle("dark-content", true);
                navigation.closeDrawer();
              }}
            />
            <DrawerItem
              label={"Test"}
              onPress={() => {
                navigation.navigate("LOGGED_IN");
                StatusBar.setBarStyle("dark-content", true);
                navigation.closeDrawer();
              }}
            />
            <DrawerItem
              label={"Test"}
              onPress={() => {
                navigation.navigate("LOGGED_IN");
                StatusBar.setBarStyle("dark-content", true);
                navigation.closeDrawer();
              }}
            />
            <DrawerItem
              label={"Test"}
              onPress={() => {
                navigation.navigate("LOGGED_IN");
                StatusBar.setBarStyle("dark-content", true);
                navigation.closeDrawer();
              }}
            />
            <DrawerItem
              label={"Test"}
              onPress={() => {
                navigation.navigate("LOGGED_IN");
                StatusBar.setBarStyle("dark-content", true);
                navigation.closeDrawer();
              }}
            />
            <DrawerItem
              label={"Test"}
              onPress={() => {
                navigation.navigate("LOGGED_IN");
                StatusBar.setBarStyle("dark-content", true);
                navigation.closeDrawer();
              }}
            />
            <DrawerItem
              label={"Test"}
              onPress={() => {
                navigation.navigate("LOGGED_IN");
                StatusBar.setBarStyle("dark-content", true);
                navigation.closeDrawer();
              }}
            />
          </SafeAreaView>
        </ScrollView>
      }
    </Animated.View>
  );
};

//<DrawerItems {...props} />
