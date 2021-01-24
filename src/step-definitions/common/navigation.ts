import {driver, ConfigurationService} from '../../runtime';

Given(/^I navigate to url "([^"]*)"$/, async (url: string) => {
    return driver().get(url);
});

Given('I navigate to the default page', async () => {
    const url = (await ConfigurationService.getConfiguration()).defaultUrl;

    if (url == undefined) {
        throw new Error('Default URL is undefined');
    }

    return driver().get(url);
});


Then(/^I should see the url is "([^"]*)"$/, async (url: string) => {
    const current = await driver().getCurrentUrl();

    expect(current).to.equal(url);
});

Then(/^I should see the page title is "([^"]*)"$/, async (title: string) => {
    return expect(driver().getTitle()).to.eventually.equal(title);
});