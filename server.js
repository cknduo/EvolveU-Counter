const express = require('express')
const app = express()

let PORT = process.env.PORT || 3000
let count = 0

// GET THE LATEST COUNT
app.get('/count', (req, res) => {
    console.log('Current count is: ' + count)
    res.send({count})
})

app.get('/increase-count', (req, res) => {
    count++
    console.log('Increased count to: ' + count)
    res.send({count})
})

app.get('/decrease-count', (req, res) => {
    count--
    console.log('Decreased count to: ' + count)
    res.send({count})
})

app.use(express.static('static')) //use express static snippet code
app.listen(PORT)    