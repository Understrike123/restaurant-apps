import CONFIG from "./config";

const API_ENDPOINT = {
    RESTAURANT_LIST: `${CONFIG.URL}/list`,
    DETAIL: (id) => `${CONFIG.URL}/movie/${id}?api_key${CONFIG.KEY}`,
    DETAIL_RESTAURANT: (id) => `${CONFIG.URL}/detail/${id}`,
    SEARCH_RESTAURANTL: (search) => `${CONFIG.URL}/search?q=${search}`,
};

export default API_ENDPOINT;
