const { expect } = require('chai');
const { Builder, Capabilities } = require('selenium-webdriver');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

describe('Post Functionality', () => {
    let driver;
    let loginPage;
    let homePage;

    before( async() => {
        driver = await new Builder().forBrowser('chrome').build();
        loginPage = new LoginPage(driver);
        homePage = new HomePage(driver);
    });

    after( async() => {
        await driver.quit();
    });

    it('should be able to create a valid post', async() => {
        await loginPage.goTo();
        await loginPage.login('jomarnavarro', 'test@1234');

        const loginSuccesful = await homePage.isAt();
        expect(loginSuccesful).to.be.true;

        const timeStampSeconds = new Date().getTime() / 1000;
        const message = "Hello World " + timeStampSeconds;
        await homePage.createPost(message);
        const isPostVisible = await homePage.verifyPostExists(message);
        expect(isPostVisible).to.be.true;
    });

});