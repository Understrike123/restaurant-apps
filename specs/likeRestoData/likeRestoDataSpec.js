import LikeButtonInitiator from "../../src/scripts/utils/likeButtonLogic";
import LikedRestaurant from "../../src/scripts/data/restoLikeDB";

const createLikeButtonPresenter = async (restaurant) => {
    await LikeButtonInitiator.init({
        likeButtonContent: document.querySelector('#likeButtonContent'),
        likedRestoDB: LikedRestaurant,
        restaurant,
    });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenter };
