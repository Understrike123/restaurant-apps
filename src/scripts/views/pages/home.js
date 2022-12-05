import RestaurantAppSource from "../../data/restaurantAPI";
import '../templates/cardItemTemplate';

const HomePage = {
    async render() {
        return `
           <item-card></item-card>
        `;
    },
    async afterRender() {
        const restaurant = await RestaurantAppSource.GET_list();
        const restoContent = document.querySelector('item-card');
        console.log(restaurant);
        restoContent.cardItemRestaurant = restaurant;
    },
};

export default HomePage;
