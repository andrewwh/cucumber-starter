# Step definitions
Step definitions match feature steps (or pickles) with either exact text or a regular expression.

The global methods _Given,When and Then_ are convenience methods that register an expression match to an action function. You should note that registering a step definition for example with _When_ permits it to be executed in any step regardless of its prefix.


## How to

## Best practice

### Minimise step definitions per file
Keep the number of step-defintions per file to a manageable level (perhaps no more than two pages).

## Parametise definitions for reuse
Use capturing regular expressions to pass parametised values. This increases the reuse and maintenance of step-definitions:

```
When(/^I enter "([^"]*)" in the search field$/, async (text: string) => {
    return Search.enterSearchText(text);
});
```

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