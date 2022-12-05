/* eslint-disable max-len */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import restaurants from '../DATA.json';
// import RestaurantAppSource from './data/restaurantAPI.js';
import App from './views/app';
import swRegister from './utils/sw_regist';

console.log(restaurants);

const app = new App({
  button: document.querySelector('#nav_toggle'),
  drawer: document.querySelector('#app_bar'),
  content: document.querySelector('#main_content'),

});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  await app.renderPage();
  swRegister();
});

/*
const array = Object.entries(restaurants);
const objFromArray = Object.fromEntries(array);
const renderRestaurant = (resto) => {
  const listResto = document.querySelector('#drop_list');
  listResto.innerHTML = '';

  for (let index = 0; index < resto.restaurants.length; index++) {
    listResto.innerHTML += `
        <div tabindex="0" id="${resto.restaurants[index].id}" class="resto_card">
          <div class="cover_Card">
            <p class="lokasi_resto">Lokasi di ${resto.restaurants[index].city}</p>
            <img src="${resto.restaurants[index].pictureId}" alt="Foto dari restaurant bernama ${resto.restaurants[index].name}">
          </div>
          <div class="descript">
            <p class="rating">Rating: ${resto.restaurants[index].rating}</p>
            <h2 class="nama_resto">${resto.restaurants[index].name} </h2>
            <p class="deskripsi_resto">${resto.restaurants[index].description.slice(1, 200)}</p>
          </div>
          <button class="tombol_read">Pilih</button>
        </div>
        `;
  }
};
*/
