import { Builder, ThenableWebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/safari';
import { Dimension } from '../dimension';

export function safari(dimension: Dimension): ThenableWebDriver {
    const options = new Options();

    const driver = new Builder()
        .forBrowser('safair')
        .setSafariOptions(options)
        .build();

    if (dimension) {
        driver.manage().window().setRect({ x: 0, y: 0, width: dimension.width, height: dimension.height });
    }
    else {
        driver.manage().window().maximize();
    }

    return driver;
}