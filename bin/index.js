#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import ora from 'ora';
import figlet from 'figlet';


// CLI app to display implementation of algorithms and data structures
program
    .version('1.0.0')
    .description('CLI app to display implementation of algorithms and data structures');

program
    .command('algorithms')
    .alias('a')
    .description('Display implementation of algorithms')
    .action(() => {
        console.log('Display implementation of algorithms');
    });

program
    .command('data-structures')
    .alias('d')
    .description('Display implementation of data structures')
    .action(() => {
        console.log('Display implementation of data structures');
    });

program
    .command('about')
    .alias('ab')
    .description('About this CLI app')
    .action(() => {
        console.log('About this CLI app');
    });

program
    .command('contact')
    .alias('c')
    .description('Contact me')
    .action(() => {
        console.log('Contact me');
    });

program
    .command('exit')
    .alias('e')
    .description('Exit the CLI app')
    .action(() => {
        console.log('Exit the CLI app');
    });

// Must be called after all the commands have been defined

// Display welcome message
console.log(
    chalk.yellow(
        figlet.textSync('AlgoDS', { horizontalLayout: 'full' })
    )
);

// Display main menu

const mainMenu = async () => {
    const questions = [
        {
            type: 'list',
            name: 'mainMenu',
            message: 'Main Menu',
            choices: ['Algorithms', 'Data Structures', 'About', 'Contact', 'Exit']
        }
    ];

    const answers = await inquirer.prompt(questions);
    const { mainMenu } = answers;

    switch (mainMenu) {
        case 'Algorithms':
            console.log('Display implementation of algorithms');
            break;
        case 'Data Structures':
            console.log('Display implementation of data structures');
            break;
        case 'About':
            console.log('About this CLI app');
            break;
        case 'Contact':
            console.log('Contact me');
            break;
        case 'Exit':
            console.log('Exit the CLI app');
            break;
        default:
            break;
    }
};

mainMenu();

program.parse(process.argv);