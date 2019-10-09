import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ListRow from '../ListRow';
import styles from './styles';


const CustomList = ({ itemList, featuredMediaList, categoryList, onPress, navigation, onEndReached }) => (
    
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <ListRow
                    title={item.title}
                    keyExtractor={(item) => item.id}
                    modified={item.modified}
                    image_url={featuredMediaList[item.featuredMediaId] ? featuredMediaList[item.featuredMediaId] : null }
                    categories={item.categories}
                    categoryList={categoryList}
                />}
                refreshing={true}
                onPress={() => {navigation.navigate('PORTFOLIO/detail', {item, featuredMediaList, categoryList})}}
                onEndReached={({ distanceFromEnd }) => onEndReached()}
                onEndReachedThreshold={0.5}
                ListFooterComponent={(
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Loading please wait...</Text>
                    </View>
                )}
            />
    </View>
    
);

export default CustomList;