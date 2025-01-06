const express = require('express')
const app = express()
const logger = require('../logger')
const authorize = require('../authorize')

// req => middleware => res
//app.use('./api',logger) // this makes sure than every method will invoke it for any route
// you can add a route and every route with api the middleware will be invoked (api/items or api/products etc)
app.use([logger, authorize])


app.get('/', (req,res) => {
    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear();
    // console.log(method, url, time)
    res.send('Home')    
})

app.get('/about', (req,res) => {
    res.send('About')    
})

app.listen((5000), () =>{
    console.log('port: 5000')
})