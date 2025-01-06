// http methods 
// get read data default request that browser preforms 
// post insert data
// put update data
// delete delete data

//url is just a address

// request message we need to know what the user is requesting, the method, and then we respond 

// const http = require('http')

// const server = http.createServer((req, res) => { // the createServer() function will take a callback function which is going to be invoked every time the user hits the server
//     console.log('user hit the server')
// })

// server.listen(5000)

// here the user hit the resource but nothing is happening, that is because we are not sending a response!
// using response.end() we signal to the server that all the response headers have been sent and that the message is complete, it MUST be called on each response

// const http = require('http')

// const server = http.createServer((req, res) => { // the createServer() function will take a callback function which is going to be invoked every time the user hits the server
//     console.log('user hit the server')
//     res.end('hello world!)

// })

// server.listen(5000)