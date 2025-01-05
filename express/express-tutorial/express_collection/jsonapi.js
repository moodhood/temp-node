// we send a json message, with that data we can build something
// res.json([body])

// Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().

// The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.


const express = require('express')
const app = express()
const {products} = require('./data.js')

app.get('/', (req, res) =>{
    //res.json([{name: 'Bob'}, {name: 'Benjamin'}])
    //res.json(1)
    res.json(products)
})


app.listen(5000, () =>{
    console.log('server port is 5000')
})