import secret from "../../secrets";

export const objToQueryString = (obj) => {
    const keyValuePairs = [];
    for (const key in obj) {
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
}

export const getHeaders = () => {
    let headers = new Headers();
    headers.append('x-rapidapi-key', secret.apiKey);
    headers.append('x-rapidapi-host', 'contextualwebsearch-websearch-v1.p.rapidapi.com');
    return headers;
}

export const fetchAndSetNews = (url, news, setNews) => {
    setNews({
        ...news,
        loading: true
    })
    fetch(url, {
        method: 'GET',
        headers: getHeaders(),
    }).then(function(response)  {
        return response.json();
    }).then(function(data) {
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