import CONFIG from "../global/config";
import API_ENDPOINT from "../global/api-endpoint";

class RestaurantAppSource {
    static async GET_list() {
        const response = await fetch(`${CONFIG.URL}/list`);
        const responseJSON = await response.json();
        return responseJSON.restaurants;
    }

    static async GET_Detail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
        return response.json();
    }
}

export default RestaurantAppSource;
