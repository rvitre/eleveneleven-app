import React from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import styles from './styles.js';

const ListRow = ({ title, description, image_url, categories, categoryList, onPress }) => (
    
    <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.container}>
            <Image source={{ uri: image_url }} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
                {categories.map((cat, index) => {
                    if (categoryList[cat]) return <Text key={index}>{categoryList[cat].name}</Text>;
                })}
            </View>

        </View>
    </TouchableNativeFeedback>
);

export default ListRow;