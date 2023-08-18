const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const MovieFetch = {

    All: function (page) {
        return `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${page}`;
    },
    POPULAR: function (page) {
        return `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;
    },

    TOPRATED: function (page) {
        return `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`;
    },

    NOWPLAYING: function (page) {
        return `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`;
    },
    UPCOMING: function (page) {
        return `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`;
    },

    DETAIL: function (id) {
        return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    },

    RECOMENDATION: function (id) {
        return `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`;
    },

    VIDEO: function (id) {
        return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    },

    SEARCH: function (search) {
        return `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}`
    },
    CREDITS: function (id) {
        return `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    },
    REVIEWS: function (id) {
        return `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    }

}


export default MovieFetch;