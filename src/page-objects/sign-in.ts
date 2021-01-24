import {By, until} from 'selenium-webdriver';
import {driver} from '../runtime'

/**
 * We are on the sign-in page if there is a matching sign-in header and page title
 */
export async function isSignInPage(): Promise<boolean> {
    const locator = By.css('h1>span');

    await driver().wait(until.elementLocated(locator));
    const elem = await driver().findElement(locator);

    return (await elem.getText()) === 'Sign in';
}