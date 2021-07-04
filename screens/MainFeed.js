import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import secret from "../secrets";

function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
}

function MainFeed( {navigation} ) {
    const [news, setNews] = useState({
        loading: true,
        error: false,
        news: [],
    });

    const getTrendingNews = (pageNumber, pageSize) => {
        const params = objToQueryString({
            pageNumber: pageNumber,
            pageSize: pageSize,
            withThumbnails: 'false',
            location: 'us'
        });
        let url = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?' + params;
        let headers = new Headers();
        headers.append('x-rapidapi-key', secret.apiKey);
        headers.append('x-rapidapi-host', 'contextualwebsearch-websearch-v1.p.rapidapi.com');

        fetch(url, {
            method: 'GET',
            headers: headers,
        }).then(function(response)  {
            return response.json();
        }).then(function(data) {
            console.log(data.value);
            setNews({
                loading: false,
                error: false,
                news: data.value
            })
        }).catch((error) => {
            console.log(error);
            setNews({
                loading: false,
                error: error,
                news: []
            })
        });
    }

    const openSingleNews = (news) => {
        navigation.navigate('SingleNews', {
            news: news
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonHolder}>
                <Button style={styles.button} onPress={() => getTrendingNews('1', '50')} title="Load news" />
            </View>
            <FlatList data={news.news} renderItem={({item}) =>
                <Text style={styles.newsItem} onPress={() => openSingleNews(item)}>{item.title}</Text>
            } extraData={news.loading}/>

        </View>
    );
}

export default MainFeed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonHolder: {
        padding: 10,
    },
    newsItem: {
        color: '#226af0',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        fontSize: 16,
    }
});