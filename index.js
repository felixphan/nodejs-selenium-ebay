var webDriver = require('selenium-webdriver');

var browser = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();

browser.get('https://www.google.com');

var promise = browser.getTitle();

promise.then(title => {
    console.log(title);
});
