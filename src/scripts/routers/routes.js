import HomePage from '../views/pages/home';
import FavoritePage from '../views/pages/favorite';
import detailResto from '../views/pages/detail_resto';

const routes = {
    '/': HomePage,
    '/Home': HomePage,
    '/Favorite': FavoritePage,
    '/detail/:id': detailResto,
};

export default routes;
