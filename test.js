const http = require('http')
const net = require("net")

const fs = require('fs')

const server = http.createServer((req,res) =>{
    res.setHeader('Content-Type', ' text/html')
   
    fs.readFile('./page/index.html', (error,data)=>{
       if(error)
        console.log(eror)
       else
         res.write(data)
        res.end()
    })
})
server.listen(3000,'localhost',()=>{
    console.log('server in listening...')
})

