/* eslint class-methods-use-this: 0 */
import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantShowView {
  getTemplate() {
    return `
      <div id="restaurantsContent"></div>
      <a href="/#mainContent" class="btn-list">List Restaurants</a>
    `;
  }

  setTitle(title, id) {
    const h2El = document.createElement('h2');
    h2El.setAttribute('id', id);
    h2El.textContent = title;
    const restaurantsContentElement =
      document.getElementById('restaurantsContent');

    const restaurantsElement = restaurantsContentElement.parentElement;
    restaurantsElement.insertBefore(h2El, restaurantsElement.firstChild);
  }

  showFavoriteRestaurants(restaurants = []) {
    const restaurantsContentElement =
      document.getElementById('restaurantsContent');
    let title = '';

    if (restaurants.length) {
      title = "My Favorite Restaurant's";
      this.setTitle(title, 'restaurant-exists');

      const html = restaurants.reduce(
        (carry, restaurant) =>
          carry.concat(createRestaurantItemTemplate(restaurant)),
        '',
      );
      restaurantsContentElement.innerHTML = html;
    } else {
      title = "Don't have favorite restaurant yet";
      this.setTitle(title, 'restaurant-none');
    }

    restaurantsContentElement.dispatchEvent(new Event('restaurant:updated'));
  }
}

export default FavoriteRestaurantShowView;
