const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => { // same logic for events, there is the on() method that will listen to the request
  res.end('Welcome')
})

server.listen(5000)