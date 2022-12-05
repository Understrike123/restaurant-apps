/* eslint-disable no-undef */
import LikedRestaurant from "../src/scripts/data/restoLikeDB";
import * as favoriteRestoFactories from './likeRestoData/likeRestoDataSpec';

describe('Add Favorite Restaurant', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="likeButtonContent"></div>';
    });

    it('Should show the like button when restaurant not been liked', async () => {
        await favoriteRestoFactories.createLikeButtonPresenter({ id: 1 });

        expect(document.querySelector('[aria-label="tambahkan ke daftar favorite"]'))
            .toBeTruthy();
    });

    it('should show the liked button if the button is liked', async () => {
        await favoriteRestoFactories.createLikeButtonPresenter({ id: 1 });

        expect(document.querySelector('[aria-label="pindahkan dari daftar favorite"]'))
            .toBeFalsy();
    });

    it('liked restaurant has inserted in the database', async () => {
        document.body.innerHTML = '<div id="likeButtonContent"></div>';

        await favoriteRestoFactories.createLikeButtonPresenter({ id: 262 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await LikedRestaurant.get_RESTO(262);
        expect(restaurant).toEqual({ id: 262 });

        LikedRestaurant.delete_Resto(262);
    });

    it('should not show in the database if not like the restaurant', async () => {
        document.body.innerHTML = '<div id="likeButtonContent"></div>';

        await favoriteRestoFactories.createLikeButtonPresenter({ id: 262 });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await LikedRestaurant.get_RESTO(262);
        expect(restaurant).toEqual({ id: 262 });
        LikedRestaurant.delete_Resto(262);
    });

    it('should not like the restaurant if the restaurant has already liked', async () => {
        await favoriteRestoFactories.createLikeButtonPresenter({ id: 262 });

        await LikedRestaurant.put_Resto({ id: 262 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await LikedRestaurant.get_AllResto()).toEqual([{ id: 262 }]);
        LikedRestaurant.delete_Resto(262);
    });

    it('should not like the restaurant if the id doesnt exist', async () => {
        await favoriteRestoFactories.createLikeButtonPresenter({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await LikedRestaurant.get_AllResto()).toEqual([]);
    });
});
