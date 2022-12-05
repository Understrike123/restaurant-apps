/* eslint-disable max-len */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
// import RestaurantAppSource from './data/restaurantAPI.js';
import App from './views/app';
import swRegister from './utils/sw_regist';

// file index sebagai entry point
const app = new App({
  button: document.querySelector('#nav_toggle'),
  drawer: document.querySelector('#app_bar'),
  content: document.querySelector('#main_content'),

});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
