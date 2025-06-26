require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI + 'pose-classifier-db')
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

app.get('/hello', (req, res) => {
    res.send('Hello World')
})