import React from 'react';
import moment from "moment";
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import styles from './styles.js';

export default ListRow = ({ title, modified, image_url, categories, categoryList, onPress }) => {
    
    const imageUri = image_url!=null ? image_url : "";
    const theDate = moment(new Date(modified)).format('DD/MM/YYYY');
    
    return (
    <TouchableHighlight
        onPress={onPress}
        >
        <View style={styles.container}>
            <Image source={ imageUri.length!=0?{uri: imageUri}: null } style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.date}>
                    Dernière modification : {theDate}
                </Text>
                <View style={styles.categories}>
                {categories.map((cat, index) => {
                    if (categoryList[cat]) return <Text style={styles.category} key={index}>{categoryList[cat].name}</Text>;
                })}
                </View>
            </View>

        </View>
    </TouchableHighlight>
)};