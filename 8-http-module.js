const http = require('http');

const server = http.createServer( (req, res) => {
    if(req.url === '/'){
        res.end(`
        <p>Welcome to our Homepage</p>
        <a href="/download">Download</a>
        `)
    }
    else if(req.url === '/download'){
        res.end('Here is our resources')
    }else {
        res.end(`
        <h1>Oops!</h1>
        <p>The file you're trying to find is not found :(</p>
        <a href='/'>Home</a>
        `);
    }
    
})

server.listen(5000);