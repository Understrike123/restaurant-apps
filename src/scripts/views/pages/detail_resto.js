import UrlParser from '../../routers/url_parser';
import RestaurantAppSource from '../../data/restaurantAPI';
import createTemplateDetailResto from '../templates/templateDetail';
import LikeButtonInitiator from '../../utils/likeButtonLogic';
import LikedRestaurant from '../../data/restoLikeDB';

const detailResto = {
    async render() {
        return `
        <div class="catalog_place">
            <div id="drop_list" class="detail_list_restaurant"></div>
        </div>
        <div id="likeButtonContent"></div>
        
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantAppSource.GET_Detail(url.id);

        const list_restaurant = document.querySelector('#drop_list');
        list_restaurant.innerHTML = createTemplateDetailResto(restaurant);

        LikeButtonInitiator.init({
            likeButtonContent: document.querySelector('#likeButtonContent'),
            likedRestoDB: LikedRestaurant,
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                rating: restaurant.rating,
                city: restaurant.city,
                pictureId: restaurant.pictureId,
                description: restaurant.description,
            },
        });
        const foodList = document.querySelector('#foodTable');
        foodList.innerHTML = '';
        restaurant.menus.foods.forEach((food) => {
            foodList.innerHTML += `
                <tr>
                    <td>${food.name}</td>
                </tr>
                `;
        });

        const drinkList = document.querySelector('#drinkTable');
        drinkList.innerHTML = '';
        restaurant.menus.drinks.forEach((drink) => {
            drinkList.innerHTML += `
                <tr>
                    <td>${drink.name}</td>
                </tr>
                `;
        });

        const reviewList = document.querySelector('#reviewList');
        reviewList.innerHTML = '';
        restaurant.customerReviews.forEach((review) => {
            reviewList.innerHTML += `
                <div class="reviewContent">
                    <div class="nameReview">
                        <h4>Nama: ${review.name}</h3>
                    </div>
                    <hr>
                    <div class="review">
                        <p>Review: ${review.review}</p>
                        <p>Waktu review: ${review.date}<p>
                    </div>
                </div>
                `;
        });
    },
};

export default detailResto;
