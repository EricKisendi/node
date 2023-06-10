const http  = require('http');

const server = http.createServer()

server.on('request', (req, res) =>{
    console.log('requested')
    res.end('Welcome')
})

server.listen(5000)