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
import Drawer from "../components/Drawer/Drawer";

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

class HeaderRight extends PureComponent {
    render() {
        return (
            <TouchableOpacity style={styles.buttonRight}>
                <Image
                    source={require("../assets/images/close.png")}
                    style={styles.iconRight}
                />
            </TouchableOpacity>
        );
    }
}

const headerLightStyle = ({ withoutBackButton = false }) => ({
    navigation
}) => ({
    headerStyle: {
        marginTop:
            Platform.OS === "android" ? StatusBar.currentHeight + 0 : 0 + 10,
        height: 45,
        borderBottomWidth: 0,
        elevation: 2,
        borderBottom: 1,
        zIndex: 2
    },
    headerForceInset: { top: "never", bottom: "never"},
    headerTitle: (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate({ routeName: MAIN });
                navigation.dispatch(
                    StackActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: MAIN })
                        ]
                    })
                );
            }}
            style={styles.logoButton}
        >
            <Image
                source={imageLogo}
                style={styles.logoIcon}
            />
        </TouchableOpacity>
    ),
    headerMode: "float",
    headerTransparent: true,
    headerBackTitle: "null",
    headerLeft: withoutBackButton ? (
        <View />
    ) : (
        ({ onPress }) => (
            <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Image
                    source={require("../assets/images/close.png")}
                    style={styles.backIcon}
                />
            </TouchableOpacity>
        )
    ),
    headerRight: true ? <View /> : <HeaderRight navigation={navigation} /> 
});

const drawerStyle = {
    drawerPosition: "right",
    drawerWidth: Dimensions.get("window").width,
    drawerBackgroundColor: "black",
    contentComponent: ({ navigation, drawerOpenProgress }) => {
        return <Drawer navigation={navigation} drawerOpenProgress={drawerOpenProgress} />;
    },
    contentOptions: {
        items: items => {
        return items;
        },
        inactiveTintColor: "white"
    }
};

export {
    headerLightStyle,
    drawerStyle
};
