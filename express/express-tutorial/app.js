const express = require('express')
const app = express()
const {products} = require('./data.js')

app.get('/', (req, res) =>{
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => { // just returning a part of the entire object (just the id name and image)
    const newProduct = products.map((product) =>{ //map is making a copy of the products
        const{id, name, image} = product;
        return {id, name, image}
    })
    res.json(newProduct)    
})

app.get('/api/products/:productID', (req, res) => { // route parameter (:productID)
    //console.log(req)
    //console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send('404')
    }
    return res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => { //you can put anything as a query, example api/v1/query?name=john&id=4 where everything after the ? is not really part of the url but more like  a search
    //console.log(req.query) //{ name: 'john', id: '4' }
    const {search, limit} = req.query
    let sortedProducts = [...products]
    //res.send('hello world')
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))        
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({success: true, data: []})
    }
    return res.status(200).json(sortedProducts) // you can only return one thing per get request!
})

app.listen(5000, () =>{
    console.log('server port is 5000')
})