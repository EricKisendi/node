const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/'){
        res.end('Welcome again to the world')
    }
    if(res.url == '/about'){
        res.end('Here is our homepage')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We cant find the page you are looking for</p>
        <a href="/">Back home</a>
    `)
})

server.listen(5000);