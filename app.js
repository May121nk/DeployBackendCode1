require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;


app.get('/' ,(req,res)=>{
    res.send('hello world')
})


app.get('/deployBackend' ,(req,res)=>{
    res.send('i am deploying my first backend code')
})

app.listen(process.env.PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
    
})