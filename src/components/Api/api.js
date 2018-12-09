export const getNews = (searchWord) => {
    const apiKey = 'd53428ee8f524b5a8eca0496826ec26d';
    const baseUrl = 'https://newsapi.org/v2/';
    const url = `${baseUrl}everything?q=${searchWord}&apiKey=${apiKey}`;
    return fetch(url)
        .then(response => response.json());
};