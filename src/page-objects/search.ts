import {until, By} from 'selenium-webdriver';
import {driver} from '../runtime';

export async function isGoogleLogoPresent(): Promise<boolean> {
    await driver().wait(until.elementLocated(By.css('img[alt="Google"]')));

    return true;
}

export async function setFocusOnSearchField(): Promise<void> {
    const elem = driver().wait(until.elementLocated(By.name('q')));

    return elem.click();
}

export async function enterSearchText(text: string): Promise<void> {
    const elem = await driver().wait(until.elementLocated(By.name('q')));

    return elem.sendKeys(text);
}