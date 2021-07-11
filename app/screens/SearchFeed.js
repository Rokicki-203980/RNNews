import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";
import {fetchAndSetNews, objToQueryString} from "../utils/URLUtils";
import {baseNewsSearchURL} from "../urls/ContextualWebURLs";
import NewsList from "../components/NewsList";

function SearchNewsFeed( {navigation} ) {
    const [news, setNews] = useState({
        loading: false,
        error: false,
        news: [],
    });
    const [query, setQuery] = useState("");

    const searchNews = (pageNumber, pageSize, searchQuery) => {
        const params = objToQueryString({
            q: searchQuery,
            pageNumber: pageNumber,
            pageSize: pageSize,
            withThumbnails: 'false',
        });
        let url = baseNewsSearchURL + params;

        fetchAndSetNews(url, news, setNews);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                clearButtonMode='while-editing'
                autoCorrect={false}
                placeholder='Please provide search query'
                onChangeText={text => setQuery(text)}
                value={query}
            />
            <View style={styles.buttonHolder}>
                <Button style={styles.button} onPress={() => searchNews('1', '50', query)} title="Search news" />
            </View>
            <NewsList
                navigation={navigation}
                news={news}
            />

        </View>
    );
}

export default SearchNewsFeed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    textInput: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    buttonHolder: {
        padding: 10,
    },
});