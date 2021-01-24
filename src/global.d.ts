import * as Chai from 'chai';
import * as Cucumber from '@cucumber/cucumber';

declare global {
    const expect: typeof Chai.expect;
    const Given: typeof Cucumber.Given;
    const Then: typeof Cucumber.Then;
    const When: typeof Cucumber.When;

    namespace NodeJS {
        interface Global {
            expect: typeof Chai.expect;
            Given: typeof Cucumber.Given;
            Then: typeof Cucumber.Then;
            When: typeof Cucumber.When;
        }
    }
}