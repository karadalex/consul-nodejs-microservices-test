const express = require('express')
const app = express()
const axios = require('axios')
const os = require('os')

const consul = 'http://consul:8500/v1/catalog'
const port = 3000
const microserviceName = os.hostname()

app.get('/', (req, res) => res.send(`This is ${microserviceName}`))
// Expected routes are /microservice1 /microservice2 /microservice3
app.get('/:microservice', (req, response) => {
    axios.get(consul+'/service/'+req.params.microservice)
        .then((res) => {
            data = res.data
            var microHost = data[0]["Address"]
            var microPort = data[0]["ServicePort"]
            var microAddr = `http://${microHost}:${microPort}`
            response.send(`The address of ${req.params.microservice} is <a href="${microAddr}">${microAddr}</a>`)
        })
        .catch((error) => console.log(error))
})

var server = app.listen(port, () => {
    console.log(`${microserviceName} is running on port ${port}`)

    // Register microservice, when it is fully running
    axios.put(consul+'/register', {
            "Datacenter": "dc1",
            "Node": "microservice",
            "Address": server.address().address,
            "Service": {
                "Service": microserviceName,
                "Port": server.address().port
            }
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
})