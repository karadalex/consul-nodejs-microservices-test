Consul Microservices simple Discovery
=====================================

## Instructions

1. Download Consul binary and run locally
2. Get Consul host address and change the line in the 3 files
```js
const consul = 'http://<YOUR_CONSUL_ADDR_HERE>:8500/v1/catalog'
```
2. To run all microservices, run `npm start`