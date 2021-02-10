# How to Develop

## Best practice

### Use async and await
Use async and await rather than the native Promise then and catch.

### Prefer wait over findElement
Modern single page apps build the DOM dynamically often as the result of an API response. The element may not be in the DOM until after the asynchronous API call has completed. You should prefer to use the _wait_ function to retrieve the element:

```
2. const elem = await driver().wait(until.elementLocated(By.name('q')));
4. elem.click();
```

### Step definitions return a promise
Step definitions should return a promise either as an action or assertion.

When asserting use chai's _eventually_:

```
Then(/^I should see sign-up form$/, async () => {
    return expect(SignUp.isSignUpPresent()).to.eventually.be.true;
});
```