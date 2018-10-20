const express = require('express')
const app = express()
const axios = require('axios')

const consulRegister = 'http://192.168.1.2:8500/v1/catalog/register'
const host = '192.168.1.2'
const port = 3003

app.get('/', (req, res) => res.send('This is microservice3'))

var server = app.listen(port, host, () => {
    console.log(`Microservice 3 is running on port ${port}`)

    // Register microservice, when it is fully running
    axios.put(consulRegister, {
            "Datacenter": "dc1",
            "Node": "microservice",
            "Address": host,
            "Service": {
                "Service": "microservice3",
                "Port": port
            }
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
})