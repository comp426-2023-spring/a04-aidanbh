import minimist from 'minimist'
const args = minimist(process.argv.slice(2)); // slice(2) removes two dummy arguments
const port = (args.port || process.env.PORT || 3000)

import express from 'express'
const app = express()



app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
