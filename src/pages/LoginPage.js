const { By } = require('selenium-webdriver');

class LoginPage {

    constructor(driver) {
        this.driver = driver;
        this.userTxt = By.css('input#username');
        this.passTxt = By.css('input#password');
        this.loginBtn = By.css('input.btn');
    }

    async login(username, password) {
        await this.driver.findElement(this.userTxt).sendKeys(username);
        await this.driver.findElement(this.passTxt).sendKeys(password);
        await this.driver.findElement(this.loginBtn).click();
    }

    async goTo() {
        await this.driver.get('http://localhost:8000/');
    }
}

module.exports = LoginPage;