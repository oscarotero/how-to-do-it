#!/usr/bin/env node

'use strict';

const minimist = require('minimist');
const chalk = require('chalk');
const figures = require('figures');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
const argv = minimist(process.argv.slice(2), { boolean: ['i'] });
const words = argv._.map(word => word.toLowerCase());

updateNotifier({ pkg }).notify();

if (!words.length) {
    console.log(
        'Missing text to search. For example: `how-to undo git commit`'
    );
    process.exit();
}

const data = {};
data.git = require('./data/git.json');
data.osx = require('./data/osx.json');
data.mysql = require('./data/mysql.json');

let result = [];

for (let category in data) {
    data[category].forEach(command => {
        let unique = 0,
            repeat = 0;

        words.forEach(word => {
            const matchTitle = command.title.toLowerCase().includes(word);
            const matchCommand = (Array.isArray(command.command)
                ? command.command.join(' ')
                : command.command)
                .toLowerCase()
                .includes(word);

            if (matchTitle || matchCommand) {
                ++unique;
            }
            if (matchTitle) {
                ++repeat;
            }
            if (matchCommand) {
                ++repeat;
            }
        });

        if (repeat) {
            result.push({
                unique: unique,
                repeat: repeat,
                command: command,
                category: category
            });
        }
    });
}

if (!result.length) {
    console.log('No results found');
    process.exit();
}

result.sort((a, b) => {
    if (a.unique < b.unique) {
        return 1;
    }

    if (a.unique > b.unique) {
        return -1;
    }

    if (a.repeat < b.repeat) {
        return 1;
    }

    if (a.repeat > b.repeat) {
        return -1;
    }

    return 0;
});

//If there's results containing all words, show only these results
if (result[0].unique === words.length) {
    result = result.filter(result => result.unique === words.length);
}

console.log(chalk.yellow(`${result.length} results:`));
console.log('');

//Show only the first 10 results
result.slice(0, 10).forEach(line => {
    const { title, command, info, links } = line.command;

    console.log(figures.arrowRight, chalk.green(`${title}:`));

    if (Array.isArray(command)) {
        command.forEach(command => printCommand(command));
    } else {
        printCommand(command);
    }

    if (argv.i) {
        printInfo(info, links);
    }

    console.log('');
});

function printCommand(command) {
    command = command.replace(/<[\w-]+>/g, match =>
        chalk.gray.underline(match)
    );
    console.log(`  ${command}`);
}

function printInfo(info, links) {
    if (info) {
        info = info.replace(/\n/g, match => '\n    ');
        console.log(`  ${chalk.gray(figures.arrowRight + ' ' + info)}`);
    }

    if (Array.isArray(links)) {
        links.forEach(link => {
            console.log(`  ${chalk.gray.underline(figures.arrowRight + ' ' + link)}`);
        })
    }
}
