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
        };
        this.dataHolder = [];
    }
    componentDidMount() {
        fetch("https://11h11-design.fr/wp-json/wp/v2/portfolio?per_page=100")
            .then(response => response.json())
            .then((responseJson) => {
                let processedResponse = this.processDataSource(responseJson);
                this.setState({
                    loading: false,
                    dataSource: processedResponse
                });
                this.dataHolder = this.state.dataSource;
            })
            .catch(error => console.log(error)) //to catch the errors if any
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
                    categoryList={this.state.categoryList} />
            </View>
        );
    }
}


