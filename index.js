const express = require('express');
const  route  = require('./Routes');
const app = express()
const port = 3000



app.use(express.json())
app.use(route)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})