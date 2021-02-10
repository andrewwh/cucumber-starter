# Cucumber with NodeJs Starter

## Table of Contents
- [Cucumber with NodeJs Starter](#cucumber-with-nodejs-starter)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Install](#install)
    - [Run Scenarios](#run-scenarios)
      - [Run all Scenarios](#run-all-scenarios)
      - [Run selected tags](#run-selected-tags)
      - [Run in parallel](#run-in-parallel)
      - [Run on for specific browser](#run-on-for-specific-browser)
      - [Complex tag expression](#complex-tag-expression)
  - [Writing your own features](#writing-your-own-features)
  - [Writing step definitions](#writing-step-definitions)
    - [Npm Commands](#npm-commands)
    - [CLI Options](#cli-options)
  - [Supported Browsers](#supported-browsers)
    - [Variants](#variants)

## Getting Started
You will need:
* NodeJs 12 or greater.
* Chrome, Firefox or Safari

### Install
1. Clone this repository
2. Remove .git directory (optional)
3. Remove example features and step definitions
4. Run ```git init``` (optional)
5. Push to your own remote (optional)
6. Run ```npm install```


### Run Scenarios
The example scenarios have been designed against google.com which should be universally accessible for demonstration purposes. 

> Some features may fail as google is constantly changing. Use this to view the failure report and screen capture.

#### Run all Scenarios

```
npm test
```

#### Run selected tags

```
npm test -- --tags @search
```

#### Run in parallel

```
npm test -- --parallel 2
```
> Do not exceed the number of cores (less one) available on your machine. Testing has shown that there are greater driver errors with more concurrent instances running.

#### Run on for specific browser

```
npm test -- --browser firefox
```
> See browsers below for a comprehensive list

#### Complex tag expression

```
npm test -- --expr "@portrait and not @large"
```

## Writing your own features
This starter contains some basic examples of automation against Google. This is not going to be your desired test target.

> To remove example code, delete the features from the "features" directory and driver specific code from "page-objects" and "step-definitions".

See [Gherkin Reference](https://cucumber.io/docs/gherkin/) for how to write and organise Gherkin.

## Writing step definitions
Once you have written your features you need to code your step definitions.

See 
* [Development Guide](DEVELOP.md)
* [Best Practices](BEST.md)

### Npm Commands

| Option       | Description                                                          |
| ------------ | -------------------------------------------------------------------- |
| build        | Compile typescript to javascript                                     |
| start        | Start the cucumber tests                                             |
| test         | Compile and run cucumber tests. Typescript is incrementally compiled |
| clean        | Remove compiled typescript and incremental save point                |
| lint:gherkin | Lint the Gherkin for syntax and formatting errors                    |
| lint:ts      | Lint typescript for formatting errors                                |
### CLI Options

The CLI options are passed passed to the "test" or "start" command:

```
npm run test -- [options go here]
```
Note, that the "--" is required to pass options to the npm script.

| Option   | Description                                                                                                                                                                                                               |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| browser  | Browser name. See [Variants](#variants) below                                                                                                                                                                             |
| tags     | Multiple arguments as "--tags @small --tags @search" or comma seperated "--tags @small,@search". Tags are combined as a logical AND. The preceeding becomes "@small and @search". Features that do not match are excluded |
| expr     | Complex tag expression using logical operators "and, or, not". For example "@small and not @search"                                                                                                                       |
| parallel | Parallel degree. Beware that for each degree or parallel, one node controller, selenium driver and browser are created. Best practice is to limit parallel to cores / 2                                                   |
| site     | Default site to test. This may prove useful if testing across multiple environments                                                                                                                                       |

## Supported Browsers
The following browsers are supported:
* Chrome
* Firefox
* Safari

### Variants
| Browser          | Name                                            |
| ---------------- | ----------------------------------------------- |
| chrome           | Standard Chrome                                 |
| chrome-headless  | Chrome without a graphical context (no window)  |
| firefox          | Standard firefox                                |
| firefox-headless | Firefox without a graphical context (no window) |
| safari           | Safari (no headless mode available)             |