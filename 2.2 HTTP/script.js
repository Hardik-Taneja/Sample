const express = require('express')
const app = express()
const port = 3000

app.get('/conversation',(req,res)=>{
    res.send("Hi it's me!")
})

app.get('/', (req, res) => {
    // in request- headers, body, query parameters //Do machine learning model
  res.send('Hello World!')
//   res.json({
//     name:"Hardik",
//     age:21
//   })
    console.log(req.headers);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})