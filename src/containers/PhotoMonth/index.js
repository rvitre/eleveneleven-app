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
import he from 'he';
import styles from './styles';

export default class PhotoMonth extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            lastPost: {},
            featuredMedia: ''
        };
    }

    componentDidMount() {
        this.getLastPost();
    }

    getLastPost() {
        this.getPosts() 
        .then(response => response.json())
        .then((responseJson) => {
            this.saveLastPost(responseJson[0]);
        })
        .catch(error => console.error(error))
    }
    
    getPosts() {
        return fetch("https://11h11-design.fr/wp-json/wp/v2/posts?page=1");
    }

    saveLastPost(responseJson) {
        let processedResponse = this.processLastPost(responseJson);
    }

    processLastPost(post) {
        let newObj = {
            key: post.id.toString(),
            id: post.id,
            title: he.decode(post.title.rendered),
            modified: post.modified,
            featuredMediaId: post.featured_media,
            link: post.link,
            content: post.content.rendered,
        };
        this.getFeaturedMedia(post.featured_media);
        return newObj;
    }


    getFeaturedMedia(id) {
        fetch("https://11h11-design.fr/wp-json/wp/v2/media/" + id)
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    featuredMedia: responseJson.source_url
                });
            })
            .catch(error => console.error(error)) //to catch the errors if any
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={ this.state.featuredMedia.length!=0?{uri: this.state.featuredMedia}: null } style={styles.backgroundImage}>
                    <HeaderLeftTransparent navigation={this.props.navigation} />
                    { this.state.featuredMedia.length!=0 ? <Text>Loading...</Text> : null }
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 100}}>
                        <PrimaryButton text={"Voir le portfolio"} onPress={() =>  { this.props.navigation.navigate('PORTFOLIO/home') }} />
                    </View>    
                </ImageBackground>
                
            </View>
        );
    }
}


