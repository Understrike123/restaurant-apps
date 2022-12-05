// eslint-disable-next-line no-unused-vars
import RestaurantAppSource from "../../data/restaurantAPI";
import { createTemplateCardResto } from "../templates/template_viewPage";

const HomePage = {
    async render() {
        return `
        <div id="daftar_resto" class="main_container">
            <h2>Pilih restaurant yang cocok dengan hati anda</h2>
            <div class="catalog_place">
                <div id="drop_list" class="list_restaurant"></div>
            </div>
        </div>
        `;
    },
    async afterRender() {
        const restaurant = await RestaurantAppSource.GET_list();
        const restoContent = document.querySelector('#drop_list');
        console.log(restaurant);
        restaurant.forEach((resto) => {
            restoContent.innerHTML += createTemplateCardResto(resto);
        });
    },
};

export default HomePage;
