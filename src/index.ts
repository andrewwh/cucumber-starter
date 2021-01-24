import {Command} from 'commander';
import {Cli} from '@cucumber/cucumber';
import {Configuration, ConfigurationService} from './runtime/configuration';
import {default as path} from 'path';
import {default as fs} from 'fs-plus';
import * as htmlReporter from 'multiple-cucumber-html-reporter';

async function main(): Promise<void> {
    const program = new Command();
    const config: Configuration = {
        browser: 'chrome-headless',
        tags: [],
        timeout: 10000
    }

    const collect = (value: string, collected: string[]) => {
        collected.push(value);
        return collected;
    };

    program
        .description('Cucumber runner')
        .option('-h, --help', 'Help using this application')
        .option('-b, --browser <name>', 'Name of browser to use. defaults to chrome-headless', 'chrome-headless')
        .option('-t, --tags <tagName>', 'Name of tags to run (comma, space or multiple options). Tags are combined with "and"', collect, [])
        .option('-t, --expr <tag expression>', 'Logical tag expression using boolean logic. Must enclose with double quotes.')
        .option('-p, --parallel <n>', 'run tests with n parallel instances', (value: string) => parseInt(value), 1)
        .option('-s, --site <site>', 'Default web site (url) against which to run the tests. Useful more multiple environments')
        .parse(process.argv);

    const args: string[] = [];

    config.browser = program.browser;

    args.push('--retry', '1');
    args.push('--require', path.join('out', 'runtime', 'boot.js'));
    args.push('--require', path.join('out', 'step-definitions'));
    args.push('--format', `json:${path.join('reports', 'cucumber.json')}`);    

    if (program.site) {
        config.defaultUrl = program.site;
    }

    if (program.expr) {
        args.push('--tags', program.expr);
    }
    else if (program.tags) {
        const tags: string[] = program.tags.flatMap( (tag: string) => {
            if(tag.indexOf(',') >= 0){
                return tag.split(',');
            }
            else if(tag.indexOf(' ') >= 0){
                return tag.split(' ');
            }
            else {
                return tag;
            }
        });
        config.tags = tags;
    
        let tagExpr = '';
        tags.forEach((tag: string) => {
            tagExpr += tagExpr.length > 0 ? ` and ${tag}` : tag;
        });
    
        if (tagExpr.length > 0) {
            args.push('--tags', tagExpr);
            console.log(`Using tag expression "${tagExpr}"`);
        }
    }    

    if (program.parallel > 1) {
        args.push('--parallel', program.parallel);
        ConfigurationService.serveConfiguration();
    }    

    args.push(path.resolve('features'));

    /**
     * Set configuration information that is required for execution.
     */
    ConfigurationService.setConfiguration(config);

    /**
     * Create the report directory if it does not exist
     */
    const reports = path.resolve('reports');
    if (!fs.existsSync(reports)) {
        fs.mkdirSync(reports);
    }    

    const cucumber = new Cli({
        argv: args,
        cwd: process.cwd(),
        stdout: process.stdout
    });    

    const result = await cucumber.run();

    if (!result.shouldExitImmediately) {
        /**
         * Create html report
         */
        await htmlReporter.generate({
            jsonDir: reports,
            reportPath: reports
        });
    }

    // Force an exit
    process.exit();
}

main();