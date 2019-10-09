import React, { Component } from 'react';
import {
    View,
    Text,
    Linking,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { PrimaryButton } from '../../components/Buttons';
import HeaderLeftTransparent from '../../components/HeaderLeftTransparent';
import styles from './styles';

export default class ContactUs extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/images/11h11-portfolio-4-crop.jpg')} style={styles.backgroundImage}>
                    <HeaderLeftTransparent navigation={this.props.navigation} />
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 60}}>
                        <PrimaryButton text={"contact@11h11-design.fr"} onPress={() => Linking.openURL('mailto:contact@11h11-design.fr')} />
                        <PrimaryButton text={"09 51 77 05 74"} onPress={() => Linking.openURL('tel:0951770574')} />
                        <PrimaryButton text={"06 67 76 68 92"} onPress={() => Linking.openURL('tel:+33667766892')} />
                    </View>    
                </ImageBackground>
                
            </View>
        );
    }
}


