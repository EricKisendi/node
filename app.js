const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    //const text = fs.readFileSync('./content/big1.txt', 'utf8')
    //console.log('I\'m requested')
    //res.end(text)

//The following code displays chunked in transfer-encoding in dev tools

    const fileStream = fs.createReadStream('./content/big1.txt', 'utf8')
    fileStream.on('open',() =>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err) => {
       res.end(err)
    })
})

server.listen(4000)