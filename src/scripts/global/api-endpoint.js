import CONFIG from "./config";

// file akses endpoint API
const API_ENDPOINT = {
    RESTAURANT_LIST: `${CONFIG.URL}/list`,
    DETAIL_RESTAURANT: (id) => `${CONFIG.URL}/detail/${id}`,
    SEARCH_RESTAURANTL: (search) => `${CONFIG.URL}/search?q=${search}`,
};

export default API_ENDPOINT;
