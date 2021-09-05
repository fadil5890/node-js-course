const EventEmitter = require('events');

const customEmitter = new EventEmitter;

customEmitter.on('response', (task) => {
    console.log(`${task} Transfer completed!`);
})
customEmitter.on('response', (task) => {
    console.log(`${task} Transfer completed!`);
})

customEmitter.emit('response','Data');

// ORDER MATTERS!
customEmitter.on('response', () => {
    console.log(`Transfer pending!`);
})

// Example

const http = require('http');
const server = http.createServer()
server.on('request', (req, res) => {
    res.end('Welcome to Our Page')
})
server.listen(5000);

// Instead of

// const http = require('http');
// const server = http.createServer( (req, res) => {
//     if(req.url === '/')res.end('Welcome to Our Page');
// })
// server.listen(5000);
