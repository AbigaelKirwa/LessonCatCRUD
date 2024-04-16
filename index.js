const express = require('express')
const app = express()
const port = 3600

app.use(express.json())
const catRoute = require('./routes/catRoutes.js')

app.use('/cats', catRoute)

app.listen(port, ()=>{
    console.log(`listening to port: ${port}`)
})

