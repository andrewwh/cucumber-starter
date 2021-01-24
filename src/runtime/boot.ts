/**
 * Boot a single selenium worker as part of the cucumber cli 'require'. This is executed once per worker when parallel
 * In principle, do not add exported functions or import this module elsewhere
 */
import * as Cucumber from '@cucumber/cucumber';
import { ITestCaseHookParameter } from '@cucumber/cucumber/lib/support_code_library_builder/types'
import { createWebDriver } from './drivers';
import * as Driver from './webdriver';
import * as Chai from 'chai';
import { default as ChaiAsPromised } from 'chai-as-promised';
import { ConfigurationService } from './configuration';
import { getDimensionFromTags } from './util';

function boot(): void {
	/**
	 * Before each scenario, create a new browser instance
	 */
	Cucumber.Before(async (scenario: ITestCaseHookParameter): Promise<void> => {
		const dimension = getDimensionFromTags((scenario?.pickle?.tags ?? []).map((t) => t.name as string));
		const config = await ConfigurationService.getConfiguration();
		Cucumber.setDefaultTimeout(config.timeout);
		Driver.setWebDriver(await createWebDriver(config.browser, dimension));
	});

	/**
	 * After each scenario tear down the browser instance. In the case of an error, take a screenshot and attach to output.
	 */
	Cucumber.After(async function (this: Cucumber.World, scenario: ITestCaseHookParameter): Promise<void> {
		try {
			if (scenario?.result?.status === Cucumber.Status.FAILED) {
				const screenshot = await Driver.driver().takeScreenshot();
				await this.attach(Buffer.from(screenshot, 'base64'), 'image/png');
			}

			await Driver.closeWebDriver();
		} catch (ex) {
			console.log(`Error in cucumber "After" scenario ${ex}`);
		}
	});

	/**
	 * Configure chai with other plug-ins
	 */
	Chai.use(ChaiAsPromised);

	/**
	 * Setup standard global methods. DO NOT pollute global with anything else!
	 */
	global.expect = Chai.expect;
	global.Given = Cucumber.Given;
	global.Then = Cucumber.Then;
	global.When = Cucumber.When;

	if (process.env.CUCUMBER_PARALLEL === 'true') {
		console.log(`Starting parallel processor ${process.env.CUCUMBER_WORKER_ID} with pid ${process.pid}`);
	}
}

boot();
