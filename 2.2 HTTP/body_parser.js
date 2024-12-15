// To get the content of the body
const express = require('express')

// npm install body-parser
const bodyParser= require("body-parser")

const app = express()
const port = 5000

// Middlewares
app.use(bodyParser.json())

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})