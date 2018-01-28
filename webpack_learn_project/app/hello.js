var config = require("./config.json");
import styles from './hello.css';//导入

module.exports = function(){
    var hello = document.createElement("div");
    hello.textContent = config.greetText;
    var divs = document.createElement("div");
    divs.className = styles.root;
    divs.textContent = "this div with root class!";
    hello.appendChild(divs);
    return hello;
}
