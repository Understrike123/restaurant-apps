import CONFIG from "../../global/config";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class CardItem extends HTMLElement {
    set cardItemRestaurant(resto) {
        this._cardItemRestaurant = resto;
        this.render();
    }

    restoId(id) {
        this._id = id;
    }

    render() {
        this.innerHTML = `
            <div id="daftar_resto" class="main_container">
                <h2>Daftar restaurant untuk anda</h2>
                <div class="catalog_place">
                    <div id="drop_list" class="list_restaurant"></div>
                </div>
            </div>
        `;

        const cardItemContainer = this.querySelector('#drop_list');
        cardItemContainer.innerHTML = '';
        this._cardItemRestaurant.forEach((resto) => {
            cardItemContainer.innerHTML += `
            <div tabindex="0" id="${resto.id}" class="resto_card">
                <div class="cover_Card">
                    <p class="lokasi_resto">Lokasi di ${resto.city}</p>
                    <img class="lazyload" data-src="${CONFIG.MEDIUM_PICTURE}${resto.pictureId}" alt="Foto dari restaurant bernama ${resto.name}">
                </div>
                <div class="descript">
                    <p class="rating">Rating: ${resto.rating}</p>
                    <h2 class="nama_resto">${resto.name} </h2>
                    <p class="deskripsi_resto">${resto.description.slice(1, 200)}</p>
                </div>
                <button onclick="window.location.href='/#/detail/${resto.id}'" id="detailButton" class="tombol_read">Pilih</button>
            </div>
            `;
        });
    }
}

customElements.define('item-card', CardItem);
