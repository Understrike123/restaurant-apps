import LikedRestaurant from "../../data/restoLikeDB";
import '../templates/favElement';

const FavoritePage = {
    async render() {
        return `
            <favorite-container></favorite-container>
        `;
    },
    async afterRender() {
        const resto = await LikedRestaurant.get_AllResto();
        const contentElementFav = document.querySelector('favorite-container');
        contentElementFav.favRestaurant = resto;
    },

};

export default FavoritePage;
