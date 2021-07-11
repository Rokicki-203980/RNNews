import React, {useState} from 'react';
import {Button, StyleSheet, View} from "react-native";
import {fetchAndSetNews, objToQueryString} from "../utils/URLUtils";
import {baseTrendingNewsURL} from "../urls/ContextualWebURLs";
import NewsList from "../components/NewsList";

function TrendingNewsFeed({navigation} ) {
    const [news, setNews] = useState({
        loading: false,
        error: false,
        news: [],
    });

    const getTrendingNews = (pageNumber, pageSize) => {
        const params = objToQueryString({
            pageNumber: pageNumber,
            pageSize: pageSize,
            withThumbnails: 'false',
        });
        let url = baseTrendingNewsURL + params;

        fetchAndSetNews(url, news, setNews);
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonHolder}>
                <Button style={styles.button} onPress={() => getTrendingNews('1', '50')} title="Load news" />
            </View>
            <NewsList
                navigation={navigation}
                news={news}
            />
        </View>
    );
}

export default TrendingNewsFeed;

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
});