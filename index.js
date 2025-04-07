//npm init -y
//npm install express
//npm install cors
//node index.js

const a = require("express")
const b = require("cors")
const server = a()

server.use(b())

server.get('/teste',(req,res)=>{
    res.send('Boneca Ambalabu')
})
server.listen(3001,()=>{
    console.log('server on')
})