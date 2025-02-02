const http = require('http')
const {readFileSync} = require('fs') // we just request this once there for sync is good

// get all files 
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => { // the createServer() function will take a callback function which is going to be invoked every time the user hits the server
    const url = req.url;
    // home page
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'}) // we are providing information for the browser 
        res.write(homePage)
        res.end()
    }
    // about page
    else if(url === '/about'){
        res.writeHead(200, {'content-type':'text/html'}) 
        res.write('<h1>about page</h1>')
        res.end()
    }
    // styles
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'}) 
        res.write(homeStyles)
        res.end()
    }
    // image
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'}) 
        res.write(homeImage)
        res.end()
    }
    // logic
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'}) 
        res.write(homeLogic)
        res.end()
    }       
    // 404
    else{
        res.writeHead(404, {'content-type':'text/html'}) // we send 404 because the page is not found 
        res.write('<h1>404 page not found</h1>')
        res.end() // so for anything else than about and / there is no recource 
    }    
})

server.listen(5000)