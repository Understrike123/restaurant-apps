import RestaurantAppSource from "../../data/restaurantAPI";
import { createTemplateCardResto } from '../templates/template_viewPage';

const FavoritePage = {
    async render() {
        return `
        <div id="daftar_resto" class="main_container">
            <h2>DAftaer restaurant yang sudah menjadi favorite anda</h2>
            <div class="catalog_place">
                <div id="drop_list" class="list_restaurant"></div>
            </div>
        </div>
        `;
    },
    async afterRender() {
        const resto = await RestaurantAppSource.GET_list();
        const restoContainer = document.querySelector('#drop_list');
        resto.foreach((RM) => {
            restoContainer.innerHTML += createTemplateCardResto(RM);
        });
    },

};

export default FavoritePage;
