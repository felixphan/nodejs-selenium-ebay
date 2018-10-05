var webDriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver');


var browser = new webDriver.Builder()
  .withCapabilities(webDriver.Capabilities.chrome())
  .build();

browser.get('https://ebay.com');
const signInButton = browser.wait(
  until.elementLocated(
    By.xpath('/html/body/div[3]/div/header/div/ul[1]/li[1]/span/a')
  ),
  10000
);
signInButton.click().then(() => {
  console.log('---Clicked Sign In Button---');
});
const userId = browser.wait(
  until.elementLocated(By.xpath('//*[@id="userid"]')),
  10000
);
userId.sendKeys('XXXXXXXX', Key.TAB).then(() => {
  console.log('---Entered user---');
});
const pwd = browser.wait(
  until.elementLocated(By.xpath('//*[@id="pass"]')),
  10000
);
pwd.sendKeys('XXXXXXX', Key.RETURN).then(() => {
  console.log('---Entered pwd---');
});