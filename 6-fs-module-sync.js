const {readFileSync, writeFileSync} = require('fs')

console.log('start')
const first = readFileSync('./module-intro/first.txt', 'utf-8');
const second = readFileSync('./module-intro/second.txt', 'utf-8');
writeFileSync(
    './module-intro/result-writefile-sync.js',
    `console.log('Here is the result : ${first}, ${second}');`
    );
writeFileSync(
    './module-intro/result-writefile-sync.js',
    `
console.log('Here is the replacement');`,
    {flag : 'a'}
    );
console.log('done')
console.log('start the next task')