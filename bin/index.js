#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';

program
    .version('1.0.0')
    .description('A simple CLI to help developers remember and implement Algorithms and Data Structures')
    .option("-n, --name <type>", "Add your name")
    .action((options) => {
        console.log(`Hello ${options.name}, Welcome to ${chalk.green('AlgoDS')}!`);
    });

program.parse(process.argv);