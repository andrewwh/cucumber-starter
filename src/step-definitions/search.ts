import * as Search from '../page-objects/search';

Then(/^I should see the google logo$/, async () => {
    return expect(Search.isGoogleLogoPresent()).to.eventually.equal(true);
});

When(/^I enter "([^"]*)" in the search field$/, async (text: string) => {
    return Search.enterSearchText(text);
});

When(/^I focus on the search field$/, async () => {
    return Search.setFocusOnSearchField();
});
