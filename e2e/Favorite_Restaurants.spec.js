/* global Feature, Scenario, Before, locate */
const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('favorited one of the restaurants', async ({ I }) => {
  I.see("Don't have favorite restaurant yet", '#restaurant-none');

  I.amOnPage('/');

  I.seeElement('.cta-restaurant');
  const firstRestaurant = locate('.cta-restaurant').first();
  const firstRestaurantName = await I.grabTextFrom('.restaurant-item h3');
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const favoritedRestaurantName = await I.grabTextFrom('.restaurant-item h3');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});

Scenario('unfavorited the restaurant', async ({ I }) => {
  I.see("Don't have favorite restaurant yet", '#restaurant-none');

  I.amOnPage('/');

  I.seeElement('.cta-restaurant');
  const firstRestaurant = locate('.cta-restaurant').first();
  const firstRestaurantName = await I.grabTextFrom('.restaurant-item h3');
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const favoritedRestaurantName = await I.grabTextFrom('.restaurant-item h3');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);

  I.seeElement('.cta-restaurant');
  I.click('.cta-restaurant');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.see("Don't have favorite restaurant yet", '#restaurant-none');
});
