const http = require('http')

const server = http.createServer((req, res) => { // The incoming request, and we send a responds 
    if(req.url === '/'){ // the / means the homepage 
        res.end('Welcome!')
    }
    else if(req.url === '/about'){
        res.end('About page biatch!')
    }
    else {res.end(
    `<h1>404 not found!</h1>
    <p>We can't seem to find the page you are looking for!</p>
    <a href="/">back home</a>`
    )}

})

server.listen(5000)