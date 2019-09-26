import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ListRow from '../ListRow';
import styles from './styles';


const CustomList = ({ itemList, featuredMediaList, categoryList, onPress, navigation }) => (
    
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <ListRow
                    title={item.title}
                    description={item.modified}
                    image_url={featuredMediaList[item.featuredMediaId] ? featuredMediaList[item.featuredMediaId] : null }
                    categories={item.categories}
                    categoryList={categoryList}
                    onPress={() => {navigation.navigate('PORTFOLIO/detail', {name: item.title})}}
                />}
            />
    </View>
    
);

export default CustomList;