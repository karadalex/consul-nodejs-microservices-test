const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => res.send('This is microservice3'))

app.listen(port, () => console.log(`Microservice 3 is running on port ${port}`))