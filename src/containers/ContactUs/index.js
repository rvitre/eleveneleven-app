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
                    <View style={{position: 'absolute', top: 0, bottom: 0, left: 0, right:0}}>
                    <TouchableOpacity onPress={() => this.handleClick(this.getClientUrl())} style={styles.bottomButton}>
                        <View style={styles.bottomButtonView}>
                            <Text style={styles.bottomButtonText}>contact@11h11-design.fr</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleClick(this.getClientUrl())} style={styles.bottomButton}>
                        <View style={styles.bottomButtonView}>
                            <Text style={styles.bottomButtonText}>09 51 77 05 74</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleClick(this.getClientUrl())} style={styles.bottomButton}>
                        <View style={styles.bottomButtonView}>
                            <Text style={styles.bottomButtonText}>09 51 77 05 74</Text>
                        </View>
                    </TouchableOpacity>
                    </View>    
                </ImageBackground>
                
            </View>
        );
    }
}


