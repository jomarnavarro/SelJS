const { expect } = require('chai');
const { Builder, Capabilities } = require('selenium-webdriver');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

describe('Login Functionality', () => {
    let driver;
    let loginPage;
    let homePage;

    before( async () => {
        driver = await new Builder().forBrowser('chrome').build();
        loginPage = new LoginPage(driver);
        homePage = new HomePage(driver);
    });

    after( async () => {           
        await driver.quit();
    });

    it('should log in succesfully', async() => {
        await loginPage.goTo();
        await loginPage.login('jomarnavarro', 'test@1234');

        const loginSuccesful = await homePage.isAt();
        console.log("Visible? " + loginSuccesful);
        expect(loginSuccesful).to.be.true;
    });
});


