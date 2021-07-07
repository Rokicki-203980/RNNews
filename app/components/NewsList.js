import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from "react-native";
import {openSingleNews} from "../utils/NavigationUtils";

function NewsList(props) {
    return (
        <View style={styles.container}>
            {
                props.news.loading ? (
                    <ActivityIndicator style={styles.indicator}
                                       color={'#000'}
                                       size={'large'}
                    />
                ) : (
                    <FlatList data={props.news.news} renderItem={({item}) =>
                        <Text style={styles.newsItem} onPress={() => openSingleNews(props.navigation, item)}>{item.title}</Text>
                    } extraData={props.news.loading}/>
                )
            }
        </View>
    );
}

export default NewsList;

const styles = StyleSheet.create({
    newsItem: {
        color: '#226af0',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        fontSize: 16,
    },
    container: {
        flex: 1,
        top: 0,
        marginTop: 0,
        paddingTop: 0,
    },
});