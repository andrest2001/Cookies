const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

app.get('/', (req,res)=>{
    res.send('Página principal del manejo de cookies')
})

app.get('/setcookie', (req,res)=>{
    res.cookie('my cookie name', 'my cookie')
    res.send('Página principal del manejo de cookies')
})

app.listen(3000)
console.log(`Server on port 3000`)