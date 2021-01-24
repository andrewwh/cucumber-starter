import { WebDriver } from 'selenium-webdriver';

let webDriver: WebDriver | null;

/**
 * Return current instance of web driver created before scenario is run (and torn down afterwards)
 */
export function driver(): WebDriver {
    return webDriver!;
}

/**
 * Set the current session's web driver
 * @param driver
 */
export function setWebDriver(driver: WebDriver): void {
    webDriver = driver;
}

/**
 * Close driver (window and instance) and clear reference in current session
 */
export async function closeWebDriver(): Promise<void> {
    await driver().quit();
    webDriver = null;
}