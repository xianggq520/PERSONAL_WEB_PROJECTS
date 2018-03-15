const http = require('http')
const fs = require('fs')
const url = require('url')
const httpPort = 8081;

http.createServer((req, res) => {
   
    let {pathname, query} = url.parse(req.url, true);





}).listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort)
})