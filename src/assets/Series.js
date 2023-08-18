const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const SeriesFetch = {

    TRENDING: function (page) {
        return `${BASE_URL}/trending/tv/day?api_key=${API_KEY}&page=${page}`;
    },
    POPULAR: function (page) {
        return `${BASE_URL}/tv/popular?api_key=${API_KEY}&page=${page}`;
    },
    COUNTRIES: function (country) {
        return `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=${country}`
    },
    RECOMENDATION: function (id) {
        return `${BASE_URL}/tv/${id}/recommendations?api_key=${API_KEY}`;
    },

    DETAIL: function (id) {
        return `${BASE_URL}/tv/${id}?api_key=${API_KEY}&append_to_response=videos`;
    },
    CREDITS: function (id) {
        return `${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}`
    },
    GENRE: function (id) {
        return `${BASE_URL}/discover/tv/?api_key=${API_KEY}&with_genres=${id}`

    }
}


export default SeriesFetch;