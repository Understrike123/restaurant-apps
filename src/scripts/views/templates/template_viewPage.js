import CONFIG from "../../global/config";

const createTemplateCardResto = (resto) => `
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
        <a href="/#/detail/${resto.id}" class="tombol_read><button class="tombol_read">Pilih</button></a>
    </div>
    `;
const createTemplateDetailResto = (resto) => `
<h2 class="resto_title">${resto.restaurant.name}</h2>
  <img class="poster_resto" src="${CONFIG.MEDIUM_PICTURE}${resto.restaurant.pictureId}" alt="${resto.restaurant.name}" />
  <div class="info_resto">
    <h3>Information</h3>
    <h4>Rating</h4>
    <p>${resto.restaurant.rating}</p>
  </div>
  <div class="resto_location">
    <h3>Location</h3>
    <p>${resto.restaurant.city}</p>
  </div>
  <div class="resto_location">
    <h3>Address</h3>
    <p>${resto.restaurant.address}</p>
  </div>
  <div class="description>
    <h3>Deskripsi resto</h3>
    <p>${resto.restaurant.description}</p>
  </div>
  
  
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="tambahkan ke daftar favorite" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
  `;

const createLikedButtonTemplate = () => `
  <button aria-label="hapus dari daftar favorite" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
  
  `;

export {
  createTemplateCardResto,
  createTemplateDetailResto,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
