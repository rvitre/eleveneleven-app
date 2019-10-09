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
            categoryList: [],
            search: '',
            page: 1,
            noMorePage: false
        };
        this.dataHolder = [];
    }
    componentDidMount() {
        this.startRequests(1);
    }
    getMorePortfolio() {
        this.setState({
            page: +this.state.page + 1
        }, () => {
            this.state.noMorePage ? null : this.startRequests(this.state.page);
        })
    }
    startRequests(page) {
        this.getPortfolioPerPage(page) 
        .then(response => response.json())
        .then((responseJson) => {
            this.saveData(responseJson);
        })
        .catch(error => console.error(error)) //to catch the errors if any
    }
    
    getPortfolioPerPage(page) {
        return fetch("https://11h11-design.fr/wp-json/wp/v2/portfolio?page="+page);
    }

    saveData(responseJson) {
        let processedResponse = this.processDataSource(responseJson);

        if (!this.state.noMorePage) {
            this.setState(state => {
                const newData = state.dataSource.concat(processedResponse);
                return {
                    loading: false,
                    dataSource: newData
                }
            });
            this.dataHolder = this.state.dataSource;

            if (processedResponse.length != 10) {
                this.setState({
                    noMorePage: true
                })
            }
        }
    }

    processDataSource(response) {
        let newSource = [];
        response.forEach((portfolio) => {
            let newObj = {
                key: portfolio.id.toString(),
                id: portfolio.id,
                title: he.decode(portfolio.title.rendered),
                modified: portfolio.modified,
                featuredMediaId: portfolio.featured_media,
                link: portfolio.link,
                categories: portfolio.portfolio_category,
                content: portfolio.content.rendered,
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
            .catch(error => console.error(error)) //to catch the errors if any
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
                .catch(error => console.error(error)) //to catch the errors if any
        });
    }

    updateSearch = search => {
        this.setState({ search });

        const newData = this.dataHolder.filter(item => {
            const itemData = item.title.toUpperCase();
            const searchData = search.toUpperCase();
            return itemData.indexOf(searchData) > -1;
        });

        this.setState({ dataSource: newData });
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Chercher..."
                    lightTheme
                    round
                    //clearIcon={'cross'}
                    //searchIcon={'search'}
                    autoCorrect={false}
                    containerStyle={{ backgroundColor: 'black' }}
                    inputContainerStyle={{ backgroundColor: 'white' }}
                    inputStyle={{ color: 'black' }}
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                />
                {this.state.loading ? <Text>Chargement...</Text> : null}
                <CustomList
                    itemList={this.state.dataSource}
                    navigation={this.props.navigation}
                    featuredMediaList={this.state.featuredMediaList}
                    categoryList={this.state.categoryList}
                    onEndReached={() => this.getMorePortfolio()}
                />
                    
            </View>
        );
    }
}