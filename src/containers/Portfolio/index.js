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

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: [],
            featuredMediaList: {},
            categoryList: []
        };
    }
    componentDidMount() {
        fetch("https://11h11-design.fr/wp-json/wp/v2/portfolio")
            .then(response => response.json())
            .then((responseJson) => {
                let processedResponse = this.processDataSource(responseJson);
                this.setState({
                    loading: false,
                    dataSource: processedResponse
                });
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }

    processDataSource(response) {
        let newSource = [];
        response.forEach((portfolio) => {
            let newObj = {
                key: portfolio.id.toString(),
                title: he.decode(portfolio.title.rendered),
                modified: portfolio.modified,
                featuredMediaId: portfolio.featured_media,
                link: portfolio.link,
                categories: portfolio.portfolio_category
            };
            this.getFeaturedMedia(portfolio.featured_media);
            this.getCategoryDefinition(portfolio._links['wp:term']);
            newSource.push(newObj);
        });
        return newSource;
    }


    getFeaturedMedia(id) {
        fetch("https://11h11-design.fr/wp-json/wp/v2/media/" + id)
            .then(response => response.json())
            .then((responseJson) => {
                this.setState(state => {
                    const featuredMediaList = { ...state.featuredMediaList, [id]: responseJson.source_url };
                    return {
                        featuredMediaList
                    };
                });
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }

    getCategoryDefinition(cats) {
        cats.forEach((cat) => {
            fetch(cat.href)
                .then(response => response.json())
                .then((responseJson) => {
                    responseJson.forEach((item) => {
                        this.setState(state => {
                            const categoryList = { ...state.categoryList, [item.id]: { slug: item.slug, name: item.name } };
                            return {
                                categoryList
                            };
                        });
                    })

                })
                .catch(error => console.log(error)) //to catch the errors if any
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Chercher..."
                    lightTheme
                    round

                    autoCorrect={false}
                />
                {this.state.loading ? <Text>LOADING !</Text> : <Text>Done</Text>}
                <CustomList 
                    itemList={this.state.dataSource} 
                    navigation={this.props.navigation}
                    featuredMediaList={this.state.featuredMediaList} 
                    categoryList={this.state.categoryList} />
            </View>
        );
    }
}


