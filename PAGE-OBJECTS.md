# Page Objects

## Best practice

### Page objects should be assertion free
Use page-objects to encapsulate reusable page logic. This should be assertion free. You should confine assertions to step-definitions.

> It is a code smell to see chai's expect