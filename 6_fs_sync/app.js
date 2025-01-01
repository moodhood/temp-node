// fs module also build in (file system)

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/text.txt', 'utf-8')

console.log(first)

writeFileSync('./content/result-sync.txt',
    `This is the result: ${first}`,
    {flag: a} //this will append the message instead of override 
)

