import React, { PureComponent, useEffect } from "react";
import FastImage from 'react-native-fast-image';
import {
    View,
    Platform,
    StatusBar,
    TouchableOpacity,
    Image,
    Text
} from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { useNavigation } from 'react-navigation-hooks';
import { MAIN } from "../../navigation/home/navigationPaths";
import { imageLogo } from "../../assets";

import styles from './styles';

export default Header = ({ withoutBackButton, withoutDrawer }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            { withoutBackButton ? <View style={styles.buttonLeft} /> : <HeaderLeft /> }
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
                <FastImage
                    style={styles.logoIcon}
                    source={imageLogo}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </TouchableOpacity>
            { withoutDrawer ? <View style={styles.buttonRight} /> : <HeaderRight navigation={navigation} /> }
        </View>
    )
}

const HeaderRight = (props) => {
    _onPress = () => {
        props.navigation.openDrawer();
        StatusBar.setBarStyle("light-content", true);
    };

    return (
        <TouchableOpacity style={styles.buttonRight} onPress={() => _onPress()}>
            <FastImage
                style={styles.iconRight}
                source={require("../../assets/images/close.png")}
                resizeMode={FastImage.resizeMode.contain}
            />
        </TouchableOpacity>
    );
}
class HeaderLeft extends PureComponent {
    render() {
        return (
            <TouchableOpacity style={styles.buttonLeft}>
                <FastImage
                    style={styles.iconLeft}
                    source={require("../../assets/images/close.png")}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </TouchableOpacity>
        );
    }
}