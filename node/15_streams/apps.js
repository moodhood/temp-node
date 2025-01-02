// const {writeFileSync} = require('fs')

// for(i = 0; i < 10000; i++){
//     writeFileSync('./content/big.txt', `${i} Hello world!\n`, {flag: 'a'})
// }

const {createReadStream} = require('fs')

// default chunk size is 64kb
const stream = createReadStream('../content/big.txt', {highWaterMark: 9000, encoding: 'utf8'}) // first arg is path, second is controle size, third is the encoding

stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err) => console.log(err))