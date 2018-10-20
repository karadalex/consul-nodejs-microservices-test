const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => res.send('This is microservice2'))

app.listen(port, () => console.log(`Microservice 2 is running on port ${port}`))