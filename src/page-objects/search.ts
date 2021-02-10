import {until, By} from 'selenium-webdriver';
import {driver} from '../runtime';

export async function isGoogleLogoPresent(): Promise<boolean> {
    const locator = By.css('img[alt="Google"]');
    await driver().wait(until.elementLocated(locator));

    return true;
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