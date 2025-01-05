// install express with npm i express

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

const express = require('express')
const app = express()

app.get('/', (req, res) =>{ // this callback function will be invoked everytime a user is performing a get request on the root
    res.status(200).send('Home page') // it is better practice to set the status code yourself
})

app.get('/about', (req, res) =>{
    res.status(200).send('About page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>404 NOT FOUND</h1>')
})

app.listen(5000, () =>{
    console.log('server is listening on port 5000')
})


