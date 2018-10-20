const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('This is microservice1'))

app.listen(port, () => console.log(`Microservice 1 is running on port ${port}`))