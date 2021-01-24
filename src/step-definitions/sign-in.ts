import * as SignIn from '../page-objects/sign-in';

Then(/^I should see the sign-in page$/, async () => {
    return expect(SignIn.isSignInPage()).to.eventually.equal(true);
});