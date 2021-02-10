import {By, until} from 'selenium-webdriver';
import {driver} from '../runtime'

/**
 * We are on the sign-in page if there is a matching sign-in header and page title
 */
export async function isSignInPage(): Promise<boolean> {
    const elem = await driver().wait(until.elementLocated(By.css('h1>span')));

    return (await elem.getText()) === 'Sign in';
}