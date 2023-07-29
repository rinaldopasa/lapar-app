import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import createFavoriteButtonPresenterWithRestaurant from './helpers/testFactories';

/* eslint no-undef: 0 */
describe('Unfavorite A Restaurant', () => {
  const addFavButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(async () => {
    addFavButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unfavorite button when the restaurant has been favorited', async () => {
    await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unfavorite this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not display favorite button when the restaurant has been liked', async () => {
    await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="favorite this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document.getElementById('favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not on the list', async () => {
    await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document
      .querySelector('[aria-label="unfavorite this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
