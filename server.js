const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

app.get('/', (req,res)=>{
    res.send('Hola mundo')
})

app.listen(3000)
console.log(`Server on port 3000`)