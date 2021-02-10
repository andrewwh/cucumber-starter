import {until, By} from 'selenium-webdriver';
import {driver} from '../../runtime';

When(/I click on the "([^"]*)" submit button/, async (name: string) => {
    const locator = By.css(`input[value="${name}"]`);

    // Wait for element to appear in the DOM
    const button = await driver().wait(until.elementLocated(locator));    

    // Wait until the element is visible (and is clickable)
    await driver().wait(until.elementIsVisible(button));

    return button.click();
});

Then(/I should see the "([^"]*)" link/, async (name: string) => {
    const locator = By.xpath(`//a[text()="${name}"]`);

    // Wait for element to appear in the DOM
    const button = await driver().wait(until.elementLocated(locator));

    // Wait until the element is visible (and is clickable)
    return driver().wait(until.elementIsVisible(button));
});

When(/I click on the "([^"]*)" link/, async (name: string) => {
    const locator = By.xpath(`//a[text()="${name}"]`);

    // Wait for element to appear in the DOM
    const button = await driver().wait(until.elementLocated(locator));

    // Wait until the element is visible (and is clickable)
    await driver().wait(until.elementIsVisible(button));

    return button.click();
});