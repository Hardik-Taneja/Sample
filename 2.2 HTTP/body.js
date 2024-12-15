// To send the contents to the body
const express = require('express')

// npm install body-parser
const bodyParser= require("body-parser")

const app = express()
const port = 5000


app.use(bodyParser.json())
app.get('/',(req,res)=> {
    console.log('HI I am Hardik');
})

app.post('/', (req, res) => {
    const message=req.query.message
    console.log(message);
//   console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})