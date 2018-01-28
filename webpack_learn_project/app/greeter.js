/* var config = require("./config.json");
module.exports = function(){
    var greet = document.createElement("div");
    greet.textContent = config.greetText;
    return greet;
} */

import React, { Component } from "react";

const config = require("./config.json")
console.log(React,Component)

class Greeter extends React.Component {
    render(){
        return (
            <div>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter