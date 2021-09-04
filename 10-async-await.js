// Asynchronous programming have different approach, such as :
// 1.using callback
// 2.using setTimeout() 
// 3.using setInterval() 
// 4.using requestAnimationFrame() 
// 5.using new Promises()
// 6.using new Promises().all()
// 7.using async await

// in this file, i will show some of differences between approach

//---------------------using .promises

const { readFile } = require('fs').promises;


//----------------------using async await and try{} catch{}
const invokeGetText = async () => {
    try {
        const first = await readFile('./module-intro/first.txt','utf-8');
        console.log(first)
    } catch (error) {
        console.log(error)
    }
}
invokeGetText()

//-----------using util.promisify node built-in method module

// const util = require('util');
// const readFilePromise = util.promisify(readFile);

//-----------using Promises

// const getText = (path) => {
//     return new Promise( (resolve,reject) => {
//         readFile(path,'utf-8',(err, res) => {
//             if(err){
//                 reject(err)
//             }else {
//                 resolve(res)
//             }
//         })    
//     })
// };

//------------using then() catch()

// getText('./module-intro/first.txt')
// .then(res => console.log(res))
// .catch(err => console.log(err));