/* global describe, beforeEach, it, expect */

import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import createFavoriteButtonPresenterWithRestaurant from './helpers/testFactories';

describe('Favorite A Restaurant', () => {
  const addFavButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavButtonContainer();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="favorite this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unfavorite this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document.getElementById('favoriteButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document.getElementById('favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no ID', async () => {
    await createFavoriteButtonPresenterWithRestaurant({});

    document.getElementById('favoriteButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
