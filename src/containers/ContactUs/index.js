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
               <Text>Contactez-nous !</Text>
            </View>
        );
    }
}


