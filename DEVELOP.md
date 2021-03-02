# How to Develop
How to develop and extend this framework

## Decisions
### Typescript
After working automation projects in pure javascript it is now obvious as to the benefits. In fact, this project was created due to this very frustration caused by javascript misuse.

### Http server for parallel
Parallel processing is a cucumber controlled. Cucumber manages the information passed to each node process. In order for each process to have access to shared state it could have used files, socks or http. Http was the cleanest and easiest.
### Globals
Having seen testing frameworks with global pollution, it was tempting to have no global extensions (all code would import). However, a number of other testing frameworks have a limited number of globals such as Jest which has _describe, test and expect_ in global scope.

## Extend runtime
Extending or improving the runtime should only introduce features and code that will work for __all__ possible users.

## Build Common


## Best practice
### Do not extend global
Do not add other global objects other than those provided by the framework. The framework provides:
* Given
* When
* Then
* expect

to make your step-definitions readable and follows similar practice of other testing frameworks.