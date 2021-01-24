import {Builder, ThenableWebDriver} from 'selenium-webdriver';
import {Options} from 'selenium-webdriver/firefox';
import {Dimension} from '../dimension';

export function firefox(dimension: Dimension): ThenableWebDriver {
    const options = new Options();

    if (dimension) {
      options.windowSize(dimension);
    }
    else {
      options.addArguments('--start-maximized');
    }
  
    return new Builder()
                  .forBrowser('firefox')
                  .setFirefoxOptions(options)
                  .build();
}

export function headless(dimension: Dimension): ThenableWebDriver {
  const options = new Options();

  options
      .headless()
      .windowSize(dimension);

  return new Builder()
              .forBrowser('firefox')
              .setFirefoxOptions(options)
              .build();
}