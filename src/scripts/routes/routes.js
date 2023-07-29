import ListRestaurant from '../views/pages/list-restaurant';
import DetailRestaurant from '../views/pages/detail-restaurant';
import Favorite from '../views/pages/favorite-restaurant';

const routes = {
  '/': ListRestaurant,
  '/home': ListRestaurant,
  '/detail/:id': DetailRestaurant,
  '/favorite': Favorite,
};

export default routes;
