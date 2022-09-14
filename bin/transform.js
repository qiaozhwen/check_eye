#! /usr/bin/env node
const path = require('path')
const {program} = require('commander')
const transformCode = require(path.resolve(__dirname, '../src/transform_code.js'))
program
    .version('0.0.1', '-v, --version')
program.command('check')
    .description('Check your code in ast')
    .argument('<string>', 'your code related or absolute path')
    .option('--createFile', 'create file to show your code')
    .action((str, options) => {
        transformCode(str, options)
    });
program.parse(process.argv);