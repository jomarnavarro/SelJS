const { By } = require('selenium-webdriver');

class HomePage {
    
    constructor(driver) {
        this.driver = driver;
        this.welcomeHdr = By.css('div.container > h1');
        this.postTxt = By.css('textarea#post');
        this.submitBtn = By.css('input.btn');
    }

    async isAt() {
        return await this.driver.findElement(this.welcomeHdr).isDisplayed();
    }

    async createPost(postContent) {
        await this.driver.findElement(this.postTxt).sendKeys(postContent);
        await this.driver.findElement(this.submitBtn).click();
    }

    async verifyPostExists(postContent) {
        const postSpans = await this.driver.findElements(By.xpath(`//span[contains(@id, "post") and text() = "${postContent}"]`))
        return postSpans.length === 1;
    }
}

module.exports = HomePage;


