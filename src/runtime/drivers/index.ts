import { ThenableWebDriver } from "selenium-webdriver";
import { Dimension } from "../dimension";
import * as Chrome from './chrome';
import * as Firefox from './firefox';
import * as Safari from './safari';

/**
 * Supported browser options
 */
export type Browser = 'chrome' | 'chrome-headless' | 'firefox' | 'firefox-headless' | 'safari';

/**
 * Factory method to created selenium browser driver
 * 
 * @param browser
 * @param dimension 
 */
export function createWebDriver(browser: Browser, dimension: Dimension): ThenableWebDriver {
    switch (browser) {
        case 'chrome':
            return Chrome.chrome(dimension);

        case 'chrome-headless':
            return Chrome.headless(dimension);

        case 'firefox':
            return Firefox.firefox(dimension);

        case 'firefox-headless':
            return Firefox.headless(dimension);

        case 'safari':
            return Safari.safari(dimension);
            
        default:
            throw new Error(`Browser ${browser} not supported`);
    }
}