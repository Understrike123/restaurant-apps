import CONFIG from "../../global/config";

const createTemplateDetailResto = (resto) => `
  <div class="detail_container">
    <h2 tabindex="0" class="resto_title">${resto.name}</h2>
    <img tabindex="0" class="poster_resto" src="${CONFIG.MEDIUM_PICTURE}${resto.pictureId}" alt="gambar restoran ${resto.name}" />
    <div tabindex="0" class="info_resto">
        <h2>Information</h3>
        <h3>Rating</h4>
        <p>${resto.rating}</p>
      </div>
      <div tabindex="0" class="resto_location">
        <h3>Location</h3>
        <p>${resto.city}</p>
      </div>
      <div tabindex="0" class="resto_location">
        <h3>Address</h3>
        <p>${resto.address}</p>
      </div>
      <div tabindex="0" class="description">
        <h2>Deskripsi resto</h3>
        <p>${resto.description.slice(1, 200)}</p>
      </div>
      <div tabindex="0" id="menus">
        <div class="foodMenu">
          <h3 class="foodMenuTitle">Foods</h3>
          <table id="foodTable"></table>
        </div>
        <div class="drinkMenu">
          <h3 class="drinkMenuTitle">Drinks</h3>
          <table id="drinkTable"></table>
        </div>
      </div>
      <hr>
      <h2>Review</h3>
      <div tabindex="0" id="reviewList" class="reviewContainer"></div>    
  </div>
  `;

export default createTemplateDetailResto;
