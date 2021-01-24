import {until, By} from 'selenium-webdriver';
import {driver} from '../runtime';

export async function isGoogleLogoPresent(): Promise<boolean> {
    const locator = By.id('hplogo');
    await driver().wait(until.elementLocated(locator));

    const logo = await driver().findElement(locator);

    return (await logo.getAttribute('alt')) == 'Google';
}

export async function setFocusOnSearchField(): Promise<void> {
    await driver().wait(until.elementLocated(By.name('q')));
    const elem = await driver().findElement(By.name('q'));

    return elem.click();
}

export async function enterSearchText(text: string): Promise<void> {
    await driver().wait(until.elementLocated(By.name('q')));
    const elem = await driver().findElement(By.name('q'));

    return elem.sendKeys(text);
}