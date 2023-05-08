import minimist from 'minimist'
const args = minimist(process.argv.slice(2)); // slice(2) removes two dummy arguments
const port = (args.port || process.env.PORT || 3000)

import express from 'express'
const app = express()


app.get('/app/', (req, res) => {
  res.set('Content-Type', 'text/plain')
  res.status(200).send("200 OK")
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
