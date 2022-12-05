/* eslint-disable no-undef */
import LikedRestaurant from "../src/scripts/data/restoLikeDB";
import * as favoriteRestoFactories from './likeRestoData/likeRestoDataSpec';

describe('Remove Favorite Restaurant', () => {
    beforeEach(async () => {
        document.body.innerHTML = '<div id="likeButtonContent"></div>';
        await LikedRestaurant.put_Resto(262);
    });

    afterEach(async () => {
        await LikedRestaurant.delete_Resto(262);
    });

    it('should show the liked button if still like the restaurant', async () => {
        await favoriteRestoFactories.createLikeButtonPresenter({ id: 262 });

        expect(document.querySelector('[aria-label="tambahkan ke daftar favorite"]'))
            .toBeTruthy();
    });

    it('should show the like button if press the liked button', async () => {
        await favoriteRestoFactories.createLikeButtonPresenter({ id: 262 });

        expect(document.querySelector('[aria-label="pindahkan dari daftar favorite"]'))
            .toBeFalsy();
    });

    it('liked restaurant has removed from the database', async () => {
        await favoriteRestoFactories.createLikeButtonPresenter({});
        LikedRestaurant.delete_Resto(262);

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await LikedRestaurant.get_AllResto()).toEqual([]);
    });

    it('should not throw error if the unliked restaurant is not inthe database', async () => {
        await favoriteRestoFactories.createLikeButtonPresenter({ id: 262 });
        // LikedRestaurant.delete_Resto(262);

        expect(await LikedRestaurant.get_AllResto()).toEqual([]);
    });
});
