/* global Feature, Scenario, locate */
const assert = require('assert');

Feature('Favorite Restaurants');

Scenario('Review one of the restaurants', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.cta-restaurant');
  const lastRestaurant = locate('.cta-restaurant').last();
  I.click(lastRestaurant);

  I.waitForElement('#customer', 3);
  I.seeElement('#review');
  I.seeElement('.btn-submit');

  const customerName = 'Coder R';
  const customerMessage = 'Nice restaurant, I like it';
  I.fillField('#customer', customerName);
  I.fillField('#review', customerMessage);

  I.click('.btn-submit');
  I.see('Your review has been submitted', '.success');

  I.wait(3);
  I.executeScript(() => {
    window.location.reload(true);
  });

  I.seeElement('.review');
  const lastReviewCustomerName = await I.grabTextFrom(
    locate('.review .title h4').last(),
  );
  const lastReviewCustomerMessage = await I.grabTextFrom(
    locate('.review p').last(),
  );

  assert.strictEqual(customerName, lastReviewCustomerName);
  assert.strictEqual(customerMessage, lastReviewCustomerMessage);
});
