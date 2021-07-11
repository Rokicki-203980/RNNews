import React, {useState} from 'react';
import {StyleSheet, View} from "react-native";
import {fetchAndSetNews, objToQueryString} from "../utils/URLUtils";
import {baseNewsSearchURL} from "../urls/ContextualWebURLs";
import {Picker} from '@react-native-picker/picker';
import NewsList from "../components/NewsList";

function CategoriesFeed( {navigation} ) {
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
            <Picker
                style={styles.picker}
                selectedValue={query}
                onValueChange={(itemValue, itemIndex) => {
                        setQuery(itemValue);
                        searchNews('1', '50', itemValue)
                    }
                }>

                <Picker.Item label="Choose category" value="x" enabled={false} style={styles.pickerDefaultItem} />
                <Picker.Item label="Science" value="science" />
                <Picker.Item label="Health" value="health" />
                <Picker.Item label="Covid" value="covid" />
                <Picker.Item label="Sport" value="sport" />
                <Picker.Item label="Politics" value="politics" />
                <Picker.Item label="Spacex" value="spacex" />
            </Picker>
            <NewsList
                navigation={navigation}
                news={news}
            />

        </View>
    );
}

export default CategoriesFeed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    picker: {
        marginTop: 10,
        height: 20,
        width: '100%'
    },
    pickerDefaultItem: {
        color: 'grey'
    },
});