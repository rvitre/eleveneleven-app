import React, { Component } from 'react';
import he from 'he';
import {
    View,
    Text,
    ScrollView,
    SectionList,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import styles from './styles';

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            dataSource: this.props.navigation.getParam('item'),
            featuredMediaList: this.props.navigation.getParam('featuredMediaList'),
            categoryList: this.props.navigation.getParam('categoryList'),
            media: []
        };
        this.getMedias();
    }

    getMedias() {
        let reg = new RegExp('(https:\/\/cdn\..*?\.jpg)', 'g');
        let regX = new RegExp('([0-9]?x[0-9]?)', 'g');

        let content = this.state.dataSource.content;
        let res = content.match(reg);
        let matchedLinks = res.filter((link) => !link.match(regX));
        console.log('matched final', matchedLinks);
    }

    getFeaturedMedia(id) {
       
    }

    getCategoryDefinition(cats) {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: this.state.featuredMediaList[this.state.dataSource.featuredMediaId] }} 
                        style={{ height: '50%'}} />
                
            </View>
        );
    }
}


