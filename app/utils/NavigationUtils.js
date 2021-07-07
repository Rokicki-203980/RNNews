export const openSingleNews = (navigation, news) => {
    navigation.navigate('SingleNews', {
        news: news
    })
}