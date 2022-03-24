const express = require('express');
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4444;


app.use(express.static('public'))

app.get('/', (req, res)=>{
 res.sendFile(__dirname + '/views/home.html')
})

app.get('/register', (req, res)=>{
    res.sendFile(__dirname + '/views/register.html')
})
app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/views/login.html')
})

app.listen(PORT, () => console.log("running on port 4001"));
