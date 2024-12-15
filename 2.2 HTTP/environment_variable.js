const express = require('express')
const app = express()
// Can specify port using set/export
const port = process.env.PORT || 3000
console.log('PORT from environment:', process.env.PORT);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// In terminal write -> 
// set(in windows)/export(in mac) PORT=3006
// node environment_variable.js
