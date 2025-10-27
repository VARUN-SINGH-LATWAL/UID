require('dotenv').config()
const express = require('express')
const app = express()

const port = 8989;

app.get('/',(req,res)=>{
    res.send("hello uid status")
})

app.listen(port,()=>{
    console.log(`Server is runing at ${port}`)
})