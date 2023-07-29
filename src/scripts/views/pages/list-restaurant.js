import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantItemTemplate,
  createSkeletonRestaurantTemplate,
  spinner,
} from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <div id="spinnerContainer"></div>
    <div id="restaurantsContent">
      ${createSkeletonRestaurantTemplate(20)}
    </div>
    `;
  },

  async afterRender() {
    const restaurantsContent = document.getElementById('restaurantsContent');
    const spinnerContainer = document.getElementById('spinnerContainer');
    spinnerContainer.innerHTML = spinner();
    try {
      const restaurants = await RestaurantSource.listRestaurants();
      restaurantsContent.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContent.innerHTML +=
          createRestaurantItemTemplate(restaurant);
      });
      spinnerContainer.style.display = 'none';
    } catch (error) {
      spinnerContainer.style.display = 'none';
      restaurantsContent.innerHTML = `Error: ${error.message}`;
    }
  },
};

export default ListRestaurant;
