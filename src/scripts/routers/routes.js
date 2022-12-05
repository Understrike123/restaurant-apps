import FavoritePage from '../views/pages/favorite';
import detailResto from '../views/pages/detail_resto';
import HomePage from '../views/pages/home';

// file routes apabila ingin men akses file lain dari navigasi
const routes = {
    '/': HomePage,
    '/home': HomePage,
    '/favorite': FavoritePage,
    '/detail/:id': detailResto,
};

export default routes;
