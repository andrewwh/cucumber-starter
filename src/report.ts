import * as htmlReporter from 'multiple-cucumber-html-reporter';
import {default as path} from 'path';

const reports = path.resolve('reports');

htmlReporter.generate({
    jsonDir: reports,
    reportPath: reports
});