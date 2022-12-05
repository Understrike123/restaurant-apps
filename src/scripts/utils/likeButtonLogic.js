/* eslint-disable max-len */
import { createLikeButtonTemplate, createLikedButtonTemplate } from "../views/templates/templateButton";

// isi mekanik dari like button
const LikeButtonInitiator = {
    async init({ likeButtonContent, likedRestoDB, restaurant }) {
        this._likeButtonContent = likeButtonContent;
        this._likedRestoDB = likedRestoDB;
        this._restaurant = restaurant;

        await this._renderLikeButton();
    },

    async _renderLikeButton() {
        const { id } = this._restaurant;

        if (await this._isRestoLiked(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestoLiked(id) {
        const resto = await this._likedRestoDB.get_RESTO(id);
        return !!resto;
    },

    _renderLike() {
        this._likeButtonContent.innerHTML = createLikeButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await this._likedRestoDB.put_Resto(this._restaurant);
            this._renderLikeButton();
        });
    },

    _renderLiked() {
        this._likeButtonContent.innerHTML = createLikedButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await this._likedRestoDB.delete_Resto(this._restaurant.id);
            this._renderLikeButton();
        });
    },

};

export default LikeButtonInitiator;
