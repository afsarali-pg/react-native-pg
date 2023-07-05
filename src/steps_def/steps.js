const { Given, When, Then } = require('@wdio/cucumber-framework');
const MenuPage = require("../../src/pageobjects/menu.page")


Given(/^I am on the (\w+) page$/, async (page) => {
    await MenuPage.hamburgerMenu.click();
   
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await expect(MenuPage.signupLoginButton).toBeExisting();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(MenuPage.mortgageTab).toBeExisting();
});

