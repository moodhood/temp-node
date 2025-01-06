const express = require('express')
const app = express()
const {people} = require('./data')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/login', (req, res) =>{
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    return res.status(401).send('Please enter valid name')
})

app.put('/api/people:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
})

app.listen((5000), () =>{
    console.log('port: 5000')
})