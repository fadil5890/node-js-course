const { writeFile } = require('fs').promises;
console.time()
const start = async () => {
    try {
        for(let i = 0; i <= 100000; i++){
            await writeFile('./module-intro/big-file-async.txt', `HELLO WORLD ${i} \n`, {flag :'a'});
        }
    } catch (error) {
        console.log(error);       
    }
}
start();
console.timeEnd()