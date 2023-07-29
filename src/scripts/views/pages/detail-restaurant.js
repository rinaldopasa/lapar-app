import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  spinner,
} from '../templates/template-creator';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import restaurantReview from '../../utils/restaurant-review';

const DetailRestaurant = {
  async render() {
    return `
      <div id="spinnerContainer"></div>
      <div id="restaurantContent"></div>
      <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const spinnerContainer = document.querySelector('#spinnerContainer');
    const restaurantContent = document.querySelector('#restaurantContent');

    spinnerContainer.innerHTML = spinner();

    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      restaurantContent.innerHTML = createRestaurantDetailTemplate(restaurant);

      FavoriteButtonPresenter.init({
        favButtonContainer: document.querySelector('#favoriteButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          rating: restaurant.rating,
          pictureId: restaurant.pictureId,
        },
      });

      spinnerContainer.style.display = 'none';

      restaurantReview(restaurant.id);
    } catch (error) {
      spinnerContainer.style.display = 'none';
      restaurantContent.innerHTML = `Error: ${error.message}`;
    }
  },
};

export default DetailRestaurant;
