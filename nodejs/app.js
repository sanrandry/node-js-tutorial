// import
const http = require('http')
const fs = require('fs')

const server1 = http.createServer(function(req, res) {
    console.log(req.url)
    if (req.url == '/about') {
        fs.readFile('./about.html', function (error, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data)
            res.end()
        })
    } else {
        fs.readFile('./index.html', function (error, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data)
            res.end()
        })
    }
})

server1.listen(3000)