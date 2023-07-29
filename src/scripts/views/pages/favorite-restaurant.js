/* eslint no-new: 0 */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantShowPresenter from './favorited-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantShowView from './favorited-restaurants/favorite-restaurant-show-view';

const view = new FavoriteRestaurantShowView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({
      view,
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
  },
};

export default Favorite;
