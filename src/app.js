//? Dependecies
const express = require('express')

//? Files
const config = require('../config')

//? Initial Configs
const app = express()
//? Enable incoming JSON data
app.use(express.json())


app.get('/', (req, res)=>{
    res.status(200).json({
        status: 200,
        message: "OK!",
        routes: {
            users: ""
        }
    })
})

app.listen(config.api.port, ()=>{
    console.log(`Server started on ${config.api.host}`)
})