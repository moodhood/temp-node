const {writeFileSync} = require('fs')

for(i = 0; i < 10000; i++){
    writeFileSync('./content/big.txt', `${i} Hello world!\n`, {flag: 'a'})
}

var http = require('http')
var fs = require('fs')
const { error } = require('console')

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8') //we are writing the content in streams, chunks so that it will not take up the entire file
    fileStream.on('open', () => { // lower data transfer
        fileStream.pipe() 
    })
    fileStream.on(error, (err) => {
        console.log(err)
    })
}).listen(5000)