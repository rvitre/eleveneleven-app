import React, { Component } from 'react';
import axios from 'axios';
import he from 'he';
import {
    View,
    Text,
    ScrollView,
    SectionList,
    StyleSheet,
    FlatList,
    Linking,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import {
    SearchBar
} from 'react-native-elements';
import styles from './styles';

export default class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: [],
            featuredMediaList: {},
            categoryList: [],
            search: '',
        };
        this.dataHolder = [];
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/images/11h11-portfolio-4-crop.jpg')} style={styles.backgroundImage}>
                    <TouchableOpacity  onPress={() => this.props.navigation.toggleDrawer()} style={styles.topLogo}>
                        <Image source={require('../../assets/images/logo-11h11.png')} style={{marginLeft: 8, width: 50, height: 50, resizeMode: 'contain'}} />
                    </TouchableOpacity>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 60}}>
                        <TouchableOpacity onPress={() => Linking.openURL('mailto:contact@11h11-design.fr')} style={styles.bottomButton}>
                            <View style={styles.bottomButtonView}>
                                <Text style={styles.bottomButtonText}>contact@11h11-design.fr</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL(`tel:0951770574`)} style={styles.bottomButton}>
                            <View style={styles.bottomButtonView}>
                                <Text style={styles.bottomButtonText}>09 51 77 05 74</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL(`tel:+33667766892`)} style={styles.bottomButton}>
                            <View style={styles.bottomButtonView}>
                                <Text style={styles.bottomButtonText}>06 67 76 68 92</Text>
                            </View>
                        </TouchableOpacity>
                    </View>    
                </ImageBackground>
                
            </View>
        );
    }
}


