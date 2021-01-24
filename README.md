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
  - [Reference](#reference)
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
The example scenarios have been designed against google.com which should be universally accessible. 

> To remove example code, delete the features from the "features" directory and driver specific code from "page-objects" and "step-definitions".

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

## Reference

### CLI Options

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