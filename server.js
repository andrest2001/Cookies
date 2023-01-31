const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

app.get('/', (req,res)=>{
    res.send('Página principal del manejo de cookies')
})

app.get('/setcookie', (req,res)=>{
    res.cookie('my cookie name', 'my cookie',{
        expires: new Date('2023-12-31'),
        //maxAge:7000,
        httpOnly:true,
        secure: true,
        sameSite:'lax'
    })
    res.send('Página principal del manejo de cookies')
})

app.get('/getcookies',(req,res)=>{
    console.log(req.cookies)
    res.send('Reading cookies')
})

app.get('/deletecookies',(req,res)=>{
    console.log(req.cookies)
    res.clearCookie('my cookie name')
    res.send('Reading cookies')
})

app.listen(3000)
console.log(`Server on port 3000`)