import LikedRestaurant from '../data/restoLikeDB';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template_viewPage';

const LikeButtonInitiator = {
    async init({ likeButtonContent, resto }) {
        this._likeButtonContent = likeButtonContent;
        this._resto = resto;

        await this._renderLikeButton;
    },

    async _renderLikeButton() {
        const { id } = this._resto;

        if (await this._isRestoLiked(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestoLiked(id) {
        const resto = await LikedRestaurant.GET_list(id);
        return !!resto;
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await LikedRestaurant.delete_Resto(this._resto.id);
            this._renderLikeButton();
        });
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await LikedRestaurant.put_Resto(this._resto);
            this._renderLikeButton();
        });
    },
};

export default LikeButtonInitiator;
