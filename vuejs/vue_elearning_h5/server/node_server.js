const express = require('express');
const app = express();
const http = require('http')
const fs = require('fs')
const url = require('url')
const httpPort = 8081;


//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,XMLHttpRequest");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("X-Powered-By", ' 3.2.1')
    //
    //if(req.method=="OPTIONS") res.sendStatus(200);/*让options请求快速返回*/
    next();
});

app.get('/fetch', function (req, res) {

    console.log(req.url)

    fs.readFile(`www/1.txt`, (error, data) => {
        if (error) {

            res.send({ content: "not found!" });
        } else {

            res.send({ content: data });
        }
        res.end();
    })

});

app.listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort)
});


/* http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"); 
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    
    let {pathname, query} = url.parse(req.url, true);
    
    console.log(req.url, pathname, query);

    if(pathname.indexOf('/fetch') != -1){
        if(req.method == 'OPTION'){
            res.writeHead(200);
            res.end(); 
        }
        fs.readFile(`www${req.url.replace('/fetch', '')}`, (error, data) => {
            if(error){
                res.writeHead(404);
                res.write("not found!");
            }else{
                res.writeHead(200, {'Content-Type': 'text/plain' });
                res.write(data)
            }
            res.end(); 
        })
    }
     
}).listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort)
}) */