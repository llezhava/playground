const express = require('express')
const app = express()
const port = 3000

// This import fires relevant function imported into the folders
const fn = require('./folders')

app.listen(port, () => {
    console.log(`Playground started on port ${port}`)
})