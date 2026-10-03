const express = require('express');
const  route  = require('./Routes');
const cors = require("cors")
const mongodbconfig = require('./dbconfig/mongodbconfig');
require('dotenv').config()
const app = express()
const port = 3000


mongodbconfig()
app.use(express.json())
app.use(cors())
app.use(route)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// username: Qulviro-ecommerce,
// password : JUlPkav7hhaNCzCq
// url : mongodb+srv://Qulviro-ecommerce:JUlPkav7hhaNCzCq@cluster0.jyqbbup.mongodb.net/test?appName=Cluster0