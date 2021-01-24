import {Builder, ThenableWebDriver} from 'selenium-webdriver';
import {Options} from 'selenium-webdriver/chrome';
import {Dimension} from '../dimension';

export function chrome(dimension: Dimension): ThenableWebDriver {
    const options = new Options();

    if (dimension) {
      options.windowSize(dimension);
    }
    else {
      options.addArguments('--start-maximized');
    }
  
    return new Builder()
                  .forBrowser('chrome')
                  .setChromeOptions(options)
                  .build();
}

export function headless(dimension: Dimension): ThenableWebDriver {
  const options = new Options();

  options
      .headless()
      .detachDriver(false)
      .windowSize(dimension);

  return new Builder()
              .forBrowser('chrome')
              .setChromeOptions(options)
              .build();
}