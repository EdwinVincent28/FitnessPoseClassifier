const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/pose-classifier-db')

app.get('/hello', (req, res) => {
    res.send('Hello World')
})

app.listen(8000, () => {
    console.log('Server Started on port 8000')
})