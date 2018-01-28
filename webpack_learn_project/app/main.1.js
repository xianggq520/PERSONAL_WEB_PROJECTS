var greet = require("./greeter");
var hello = require("./hello");

import './other.1.css';

import './main.css';//使用import导入css文件
//require("./main.css");//使用require导入css文件

document.querySelector("#root").appendChild(greet()).appendChild(hello());
 