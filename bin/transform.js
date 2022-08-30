#! /usr/bin/env node

const {program} = require('commander')

program
    .version('0.0.1', '-v, --version')
program.command('check')
    .description('Check your code in ast')
    .argument('<string>', 'your code related or absolute path')
    .option('--createFile', 'create file to show your code')
    .action((str, options) => {
        console.log(str,options);
    });
program.parse(process.argv);