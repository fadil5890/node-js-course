const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./module-intro/first.txt', 'utf-8', (err,result) => {
    if(err) {
        console.log(err);
        return;
    }
    const firstText = result;
    console.log(result);
    readFile('./module-intro/second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const secondText = result;
        console.log(result);
        writeFile('./module-intro/result-writefile-async.js',`// Here is the async result : ${firstText} + ${secondText}`, (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('done');        
        })
    })
});
console.log('start the next task')
// readFile('./module-intro/second.txt', 'utf-8');

// writeFile(
//     './module-intro/result-writefileasync.js',
//     `console.log('Here is the result : ${first}, ${second}');`
//     );
    
    
// writeFile(
//     './module-intro/result-writefileasync.js',
//     `
// console.log('Here is the replacement');`,
//     {flag : 'a'}
//     );