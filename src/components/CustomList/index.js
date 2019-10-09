import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ListRow from '../ListRow';
import styles from './styles';


const CustomList = ({ itemList, featuredMediaList, categoryList, navigation, onEndReached }) => (
    
    <View style={styles.container}>
        <FlatList
                data={itemList || []}
                renderItem={({ item }) => <ListRow
                    title={item.title}
                    keyExtractor={(item) => item.id}
                    modified={item.modified}
                    image_url={featuredMediaList[item.featuredMediaId] ? featuredMediaList[item.featuredMediaId] : null }
                    categories={item.categories}
                    categoryList={categoryList}
                    onPress={() => {navigation.navigate('PORTFOLIO/detail', {item, featuredMediaList, categoryList})}}
                />}
                refreshing={true}
                onEndReached={({ distanceFromEnd }) => onEndReached()}
                onEndReachedThreshold={1}
            />
    </View>
);

export default CustomList;