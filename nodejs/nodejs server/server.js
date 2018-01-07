var url = require("url")
var http = require("http")
var ws = require("socket.io")
var fs = require("fs")
var mysql = require("mysql");

var db = mysql.createPool({host:"localhost", user:"root", password:"db240717", database:"ttdb"});

var httpServer = http.createServer((req, res) => {
    
    let {pathname, query} = url.parse(req.url, true);
    
    console.log(pathname, query);

    if(pathname == '/reg'){
        let {username, password} = query;
        if(username == ""){
            res.writeHead(200);
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8' });
            res.write(JSON.stringify({code:1, msg: "用户名不符合规范"}), "utf8");
            res.end();
        }else if(password == ""){
            res.writeHead(200);
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8' });
            res.write(JSON.stringify({code:1, msg: "密码不符合规范"}), "utf8");
            res.end();
        } else {
            console.log(`select * from user_login where username=  "${username}"`);
            db.query(`select * from user_login where username=  "${username}"`, (error, data) => {
                if(error){
                    console.log(error);
                    res.writeHead(200);
                    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8' });
                    res.write(JSON.stringify({code:1, msg: "select数据库异常了"}));
                    res.end();
                }else if (data.length > 0) {
                    res.writeHead(200);
                    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8' });
                    res.write(JSON.stringify({code:1, msg: "用户已存在"}));
                    res.end();
                }else{
                    db.query(`insert into user_login(username,passwd,status) values("${username}", "${password}", "1")`, error => {
                        if(error){
                            console.log(error);
                            res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8' });
                            res.write(JSON.stringify({code:1, msg: "insert数据库异常了"}));
                            res.end();
                        }else{
                            res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8' });
                            res.write(JSON.stringify({code:0, msg: "新增用户成功"}));
                            res.end();
                        }
                    })
                }
            })
        }
    }else{
        fs.readFile(`www${req.url}`, (error, data) => {
            if(error){
                console.log(error);
                res.writeHead(404);
                res.write("not found!");
            }else{
                res.writeHead(200, {'Content-Type': 'text/html' });
                res.write(data)
            }
            res.end(); 
        })
    }
});

httpServer.listen(8080);





