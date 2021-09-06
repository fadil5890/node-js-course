const { writeFileSync } = require('fs');
console.time()
for(let i = 0; i <= 100000; i++){
    writeFileSync('./module-intro/big-file.txt', `HELLO WORLD ${i} \n`, {flag : 'a'});
}
console.timeEnd()