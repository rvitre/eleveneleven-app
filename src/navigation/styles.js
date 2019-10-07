import React, { PureComponent } from "react";
import {
    View,
    Platform,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions
} from "react-native";
import { MAIN } from "./home/navigationPaths";
import { NavigationActions, StackActions } from "react-navigation";
import EStyleSheet from "react-native-extended-stylesheet";
import { imageLogo } from "../assets";
import Drawer from "../components/Drawer";

const styles = EStyleSheet.create({
    iconRight: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: "red"
    },
    buttonRight: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    logoIcon: {
        height: '100%',
        width: '100%',
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: "red",
        marginTop: 5
    },
    logoButton: {
        flex: 1,
        paddingVertical: 10
    }
});

const headerDarkStyle = ({ withoutBackButton = false, title }) => ({
    navigation
}) => ({
    headerLeft:
        withoutBackButton ? <TouchableOpacity  onPress={() => navigation.toggleDrawer()}>
            <Image source={require('../assets/images/logo-11h11.png')} style={{marginLeft: 8, width: 50, height: 50, resizeMode: 'contain'}} />
        </TouchableOpacity> : ''
    ,
    headerTitle: title,
    headerStyle: {
    backgroundColor: 'black',
    color: 'white',
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    shadowColor: 'transparent',
    marginBottom: -2,
    borderBottomWidth: 0,
    },
    headerTintColor: 'white',
});

const headerTransparentStyle = ({ withoutBackButton = false, title }) => ({
    navigation
}) => ({
    mode: 'card',
    headerForceInset: { top: 'never', bottom: 'never' },
    cardStyle: { backgroundColor: 'transparent' },
    tintColor: '#ffffff',
    headerMode: 'screen'
});

const drawerStyle = {
    drawerPosition: "left",
    drawerWidth: Dimensions.get("window").width,
    drawerBackgroundColor: 'black',
    contentComponent: ({ navigation }) => {
        return <Drawer navigation={navigation} />;
    },
    contentOptions: {
        items: items => {
            return items;
        },
        inactiveTintColor: "white"
    }
};

export {
    headerDarkStyle,
    headerTransparentStyle,
    drawerStyle
};
