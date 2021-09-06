const http = require('http');
const fs = require('fs');

const server = http.createServer()

server.on('request', (req, res) => {
    // const text = fs.readFileSync('./module-intro/big-file.txt', 'utf-8')
    // res.end(text)
    const fileStream = fs.createReadStream('./module-intro/big-file.txt', 'utf-8')
    fileStream.on( 'open', () => {
        fileStream.pipe(res)
    })
    fileStream.on( 'error', (err) => {
        console.log(err);
    })
})

server.listen(5000)
// const {createReadStream} = require('fs');

// const stream = createReadStream('./module-intro/big-file-async.txt', {highWaterMark: 32000});

// stream.on('data', (res) => {
//     console.log(res)
// })
// stream.on('error', (err) => {
//     console.log(err)
// })

// default buffer is 64 kilobytes
// last buffer - remainder