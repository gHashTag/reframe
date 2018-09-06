#!/usr/bin/env node

console.log(process.argv);
process.argv.splice(2, 0, 'create-app');
require('@reframe/cli/bin.js');
