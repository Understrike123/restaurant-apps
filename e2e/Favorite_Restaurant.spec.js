/* eslint-disable no-undef */
Feature('Like Restaurant');

// untuk like restaurant
Scenario('Add Restaurant to Favorite', async ({ I }) => {
    I.amOnPage('/');
    I.wait(3);
    I.seeElement('#detailButton');
    I.click('#detailButton');
    I.wait(3);
    I.amOnPage('/#/detail');
    I.seeElement('#likeButton');
    I.click('#likeButton');
    // const buttonLike = await I.grabAttributeFrom('button', 'aria-label');
    I.wait(3);
    I.seeElement('#navbar_favorite');
    I.click('#navbar_favorite');
    I.wait(3);
    I.seeElement('#favorite_drop_list');
    I.see('Pilih'); //
});

// untuk unlike restaurant
Scenario('Remove From Favorite Restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.wait(3);
    I.seeElement('#detailButton');
    I.click('#detailButton');
    I.amOnPage('/#/detail');
    I.wait(3);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.click('#likeButton');
    I.wait(3);
    I.seeElement('#navbar_favorite');
    I.click('#navbar_favorite');
    I.wait(3);
    I.seeElement('#favorite_drop_list');
    I.dontSee('Pilih');
});

// scenario about us page
Scenario('Using about us navbar', async ({ I }) => {
    I.amOnPage('/');
    I.wait(3);
    I.seeElement('#navbar_about');
    I.click('#navbar_about');
    I.wait(3);
    I.amOnPage('https://github.com/Understrike123');
    I.see('GitHub');
});

// untuk menggunakan skip to main content
Scenario('Using skip to main content anchor', async ({ I }) => {
    I.amOnPage('http://localhost:9000/#/Home');
    I.wait(3);
    I.seeElement('#skip_toContent');
    I.wait(3);
    I.pressKey('Enter');
    I.seeElement('#main_content');
});
