import axios from "axios";

export const APIKey = "dbdd5a6286424577a15e9bf27f770b1e";

export const NewsViewerAPI = () => {
    return axios
    .get(`https://newsapi.org/v2/top-headlines?country=pl&apiKey=${APIKey}`)
    .then((response) => {
        return response.data.articles;
    })
    .catch((error) => {
        console.log(error);
        return [];
    });
};