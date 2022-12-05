import UrlParser from '../../routers/url_parser';
import RestaurantAppSource from '../../data/restaurantAPI';
import { createTemplateDetailResto } from '../templates/template_viewPage';
import LikeButtonInitiator from '../../utils/likeButtonLogic';

const detailResto = {
    async render() {
        return `
        <div class="catalog_place">
            <div id="drop_list" class="list_restaurant"></div>
        </div>
        <div id="likeButtonContent"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantAppSource.GET_Detail(url.id);

        const array = Object.entries(restaurant);
        const restoArray = Object.fromEntries(array);
        const list_restaurant = document.querySelector('#drop_list');
        list_restaurant.innerHTML = createTemplateDetailResto(restoArray);

        LikeButtonInitiator.init({
            likeButtonContent: document.querySelector('#likeButtonContent'),
            restaurant: {
                id: restaurant.restaurant.id,
                name: restaurant.restaurant.name,
                rating: restaurant.restaurant.rating,
                city: restaurant.restaurant.city,
                description: restaurant.restaurant.description,
                pictureId: restaurant.restaurant.pictureId,
            },
        });
    },
};

export default detailResto;
