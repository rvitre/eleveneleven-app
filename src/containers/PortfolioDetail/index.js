import React, { Component } from 'react';
import he from 'he';
import {
    View,
    Text,
    ScrollView,
    SectionList,
    StyleSheet,
    FlatList,
    Image,
    Share,
    Button,
    Linking,
    TouchableOpacity
} from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
import { PrimaryButton } from '../../components/Buttons';
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

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.item.title,
    });

    getMedias() {
        // match https://cdn*.jpg strings
        let reg = new RegExp('(https:\/\/cdn\..*?\.jpg)', 'g');
        // match 000x000 strings
        let regX = new RegExp('([0-9]?x[0-9]?)', 'g');

        let content = this.state.dataSource.content;
        let allUrls = content.match(reg);
        let interestingUrls = allUrls.filter((link) => !link.match(regX)); // we don't want thumbnails
        return interestingUrls;
    }

    getClientUrl() {
        // match all urls
        let reg = new RegExp('(http.*?(\.fr|\.org|\.com))', 'g');
        // match '11h11' string
        let regX = new RegExp('(11h11)', 'g');

        let content = this.state.dataSource.content;
        let allUrls = content.match(reg);
        let interestingUrls = allUrls.filter((link) => !link.match(regX)); // we don't want thumbnails
        return interestingUrls[0];
    }

    getFeaturedMedia() {
        return this.state.featuredMediaList[this.state.dataSource.featuredMediaId];
    }

    getCategoryDefinition(cats) {

    }

    onShare = async (i) => {
        try {
            const result = await Share.share({
                message: this.getMedias()[i],
            });
        } catch (error) {
            alert(error.message);
        }
    };

    handleClick = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerSlider}>
                    <GallerySwiper
                        onLongPress={(f, i) => { this.onShare(i); console.log('long pressed on', this.getMedias()[i]) }}
                        style={styles.slider}
                        resizeMode={'contain'}
                        sensitiveScroll={false}
                        resistantStrVertical={(dx) => (dx /= 1)}
                        images={this.getMedias().map((media) => { return { uri: media, dimensions: { width: 1080, height: 1920 } } })}
                    />
                </View>
                { this.getClientUrl() ? <View style={styles.bottomButtonsContainer}>
                    <TouchableOpacity onPress={() => this.handleClick(this.getClientUrl())} style={styles.bottomButton}>
                        <View style={styles.bottomButtonView}>
                            <Text style={styles.bottomButtonText}>Voir le site</Text>
                        </View>
                    </TouchableOpacity>
                </View> : null }
            </View>
        );
    }
}