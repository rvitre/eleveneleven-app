import React from "react";
import { SafeAreaView } from "react-navigation";
import { useNavigation } from 'react-navigation-hooks';
import {
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
  /*const translateX = props.drawerOpenProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0]
  });*/

  return (
    <Animated.View /*style={{ transform: [{ translateX }] }}*/>
      {
        <ScrollView style={styles.container}>
          <SafeAreaView>
            <TouchableOpacity  onPress={() => navigation.toggleDrawer()} style={styles.header}>
              <Image source={require('../../assets/images/logo-11h11-baseline-1.png')} style={{ width: 150, height: 150, resizeMode: 'contain'}} />
            </TouchableOpacity>
            <DrawerItem
              label={"Photo du mois"}
              onPress={() => {
                navigation.navigate("PHOTOMONTH/home");
                StatusBar.setBarStyle("light-content", true);
                navigation.closeDrawer();
              }}
            />
            <DrawerItem
              label={"Portfolio"}
              onPress={() => {
                navigation.navigate("PORTFOLIO/home");
                StatusBar.setBarStyle("light-content", true);
                navigation.closeDrawer();
              }}
            />
            <DrawerItem
              label={"Contact"}
              onPress={() => {
                navigation.navigate("CONTACT/home");
                StatusBar.setBarStyle("light-content", true);
                navigation.closeDrawer();
              }}
            />
          </SafeAreaView>
        </ScrollView>
      }
    </Animated.View>
  );
};
