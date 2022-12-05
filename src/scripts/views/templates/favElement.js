import CONFIG from "../../global/config";

class Favorite extends HTMLElement {
    set favRestaurant(resto) {
        this._favRestaurant = resto;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="daftar_resto" class="main_container">
                <h2>Daftar restaurant yang sudah menjadi favorite anda</h2>
                <div class="catalog_place">
                    <div id="favorite_drop_list" class="list_restaurant"></div>
                </div>
            </div>
        `;

        const favoriteContainer = this.querySelector('#favorite_drop_list');
        favoriteContainer.innerHTML = '';
        this._favRestaurant.forEach((resto) => {
            favoriteContainer.innerHTML += `
            <div tabindex="0" id="${resto.id}" class="resto_card">
                <div class="cover_Card">
                    <p class="lokasi_resto">Lokasi di ${resto.city}</p>
                    <img src="${CONFIG.MEDIUM_PICTURE}${resto.pictureId}" alt="Foto dari restaurant bernama ${resto.name}">
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
        console.log(this.favRestaurant);
    }
}

customElements.define('favorite-container', Favorite);
