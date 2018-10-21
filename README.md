Consul Microservices simple Discovery
=====================================

## Instructions (Simple version)

1. Download Consul binary and run locally
2. Get Consul host address and change the line in the 3 files
```js
const consul = 'http://<YOUR_CONSUL_ADDR_HERE>:8500/v1/catalog'
```
3. Install dependencies run `npm install` or `yarn install`
4. To run all microservices, run `npm start`


## Instructions (Docker version)

1. Make sure you have `docker` and `docker-compose` installed
2. Start consul and as many microservices you want by running `docker-compose up` . You can 
   run more than one microservices (e.g. 5) by running `docker-compose up --scale microservice=5`
3. Go to Consul dashboard [localhost:8500](localhost:8500) to check if microservices were registered properly