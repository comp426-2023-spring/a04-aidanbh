import minimist from 'minimist'
const args = minimist(process.argv.slice(2)); // slice(2) removes two dummy arguments
const port = (args.port || process.env.PORT || 3000)

import express from 'express'
const app = express()

import { rps, rpsls } from './lib/rpsls.js'

// main endpoint

app.get('/app/', (req, res) => {
  res.set('Content-Type', 'text/plain')
  res.status(200).send("200 OK")
})

// single player functions

app.get('/app/rps/', (req, res) => {
 res.set('Content-Type', 'text/json')
 res.status(200).send(rps())
})

app.get('/app/rpsls/', (req, res) => {
 res.set('Content-Type', 'text/json')
 res.status(200).send(rpsls())
})



// handle requests not matching any route

app.use((req, res, next) => 
{
  res.set('Content-Type', 'text/plain')
  res.status(404).send("404 NOT FOUND")
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
