/* eslint no-new: 0 */
/* global describe, beforeEach, it, expect, spyOnAllFunctions */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantShowView from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-show-view';

describe('Showing all favorited restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantShowView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been favorited', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been favorited', (done) => {
      document
        .getElementById('restaurantsContent')
        .addEventListener('restaurant:updated', () => {
          expect(document.getElementById('restaurant-none')).toBeTruthy();
          done();
        });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('When favorite restaurants exists', () => {
    it('should show the restaurants', (done) => {
      document
        .getElementById('restaurantsContent')
        .addEventListener('restaurant:updated', () => {
          expect(document.querySelectorAll('.restaurant-item').length).toEqual(
            2,
          );
          done();
        });

      const favoriteRestaurants = spyOnAllFunctions(
        FavoriteRestaurantIdb,
        false,
      );
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11,
          name: 'A',
          city: 'Kota A',
          rating: 4,
        },
        {
          id: 22,
          name: 'B',
          city: 'Kota B',
          rating: 5,
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
