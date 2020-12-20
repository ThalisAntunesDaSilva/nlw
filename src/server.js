const express = require("express")
const server = express()

//configurar pasta public
server.use(express.static("public"))


//Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./src/views",{ 
    express: server,
    noCache: true
})

// configurar caminhos da minha aplçicação
//pagina inicial
// req: Requisição
// res: Resposta

server.get("/", (req, res) =>{
res.sendFile("index.html" , {title: "Um título"})

})

server.get("/create-point", (req, res) =>{
    res.sendFile("/views/create-point.html")
    
    })

    server.get("/search-results", (req, res) =>{
        res.sendFile("/views/search-results.html")
        
        })


//ligar o servidor
server.listen(3000)

