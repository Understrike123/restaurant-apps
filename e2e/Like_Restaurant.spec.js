/* eslint-disable no-undef */
Feature('Like Restaurant');

Scenario('Add Restaurant to Favorite', async ({ I }) => {
    I.amOnPage('/');
    I.wait(5);
    I.seeElement('#detailButton');
    I.click('#detailButton');
    I.wait(5);
    I.amOnPage('/#/detail');
    I.seeElement('#likeButton');
    I.click('#likeButton');
    // const buttonLike = await I.grabAttributeFrom('button', 'aria-label');
    I.wait(5);
    I.seeElement('#navbar_favorite');
    I.click('#navbar_favorite');
    I.wait(5);
    I.seeElement('#favorite_drop_list');
    I.see('Pilih'); //
});

Scenario('Remove From Favorite Restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.wait(5);
    I.seeElement('#detailButton');
    I.click('#detailButton');
    I.amOnPage('/#/detail');
    I.wait(5);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.click('#likeButton');
    I.wait(5);
    I.seeElement('#navbar_favorite');
    I.click('#navbar_favorite');
    I.wait(5);
    I.seeElement('#favorite_drop_list');
    I.dontSee('Pilih');
});
