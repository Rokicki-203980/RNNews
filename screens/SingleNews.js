import React from 'react';
import {Button, Image, Linking, ScrollView, StyleSheet, Text, View} from "react-native";

function SingleNews({ route, navigation}) {
    const { news } = route.params;

    const openURL = (url) => {
        Linking.openURL(url);
    }

    console.log(news.image.url);
    return (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
            <Text style={styles.title}>{news.title}</Text>
            <Image style={styles.image} source={{
                uri: news.image.url,
            }} />
            <Text style={styles.snippet}>{news.snippet}</Text>
            <Text style={styles.body}>{news.body}</Text>
            <View style={styles.buttonHolder}>
                <Button onPress={() => openURL(news.url)} title="Open source article" />
            </View>
        </ScrollView>
    );
}

export default SingleNews;

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        fontWeight: "800",
        paddingBottom: 5,
        fontSize: 18,
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
        height: 200
    },
    snippet: {
        fontStyle: 'italic',
        paddingBottom: 10,
        fontSize: 14,
    },
    body: {
        fontSize: 12,
    },
    link: {
        color: '#226af0',
        paddingTop: 5,
    },
    buttonHolder: {
        paddingTop: 10,
        paddingBottom: 20
    },
});