const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/upcoming');
});

const likingRestaurant = async ({ I }) => {
  I.amOnPage('/');
  I.wait(5);

  I.waitForElement('.resto-item__content');
  I.seeElement('.resto-item__content');
  const firstRestaurantTitle = await I.grabTextFrom('.resto-item__content h3');
  const firstRestaurant = locate('.resto-item__content h3 a').first();
  const firstLink = await I.grabAttributeFrom(firstRestaurant, 'href');
  I.amOnPage(firstLink);

  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/upcoming');
  I.wait(5);
  I.seeElement('.likeElement');
  const likedRestaurant = await I.grabTextFrom('.resto-item__content h3');
  assert.strictEqual(firstRestaurantTitle, likedRestaurant);
};

Scenario('showing empty liked restaurant', ({ I }) => {
  I.wait(5);
  I.seeElement('.content__heading');
  I.see('Your Liked Resto', '.content__heading');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.wait(5);
  await likingRestaurant({ I });
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.wait(5);
  await likingRestaurant({ I });

  I.amOnPage('/#/upcoming');
  I.seeElement('.resto-item__content');
  I.click('.resto-item__content a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/upcoming');
  I.see('Your Liked Resto', '.content__heading');
});
