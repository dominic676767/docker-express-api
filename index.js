const express = require('express')
const app = express()
const PORT = 8080
const HOST = '0.0.0.0';
const date = new Date().toTimeString()

app.get('/', (req, res) => {
  res.send(`Hello World @ ${date}`)
})

app.listen(PORT, () => {
  console.log(`Listening at http://${HOST}:${PORT}`)
})