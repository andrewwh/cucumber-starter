# Best practice

## Page objects
Use page-objects to encapsulate reusable page logic. This should be assertion free.

> It is a code smell to see chai's expect

## Step defintions

### Parametise definitions for reuse
Use capturing regular expressions to pass parametised values. This increases the reuse and maintenance of step-definitions:

```
When(/^I enter "([^"]*)" in the search field$/, async (text: string) => {
    return Search.enterSearchText(text);
});
```

### Minimise step definitions per file
Keep the number of step-defintions per file to a manageable level (perhaps no more than two pages).

## Features

### Linting
Always lint typescript and Gherkin before pushing your changes. Consider making these a git push hook.

