const express = require('express')
const path = require('path')
const app = express()


app.use(express.static('./public')) //express will handle all the get requests
//static asset, the server does not need to change it 

// app.get('/', (req,res) =>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req,res) =>{
    res.status(404).send('404 not found')
})

app.listen(5000, () => {
    console.log('server port 5000')
})

