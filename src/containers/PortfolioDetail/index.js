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

import CustomList from '../../components/CustomList';
import styles from './styles';

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);
    }  

    render() {
        return (
            <View style={styles.container}>
                <Text>LOADING !</Text>
            </View>
        );
    }
}


