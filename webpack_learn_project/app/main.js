/* var greet = require("./greeter");

document.querySelector("#root").appendChild(greet()); */

import { React } from "react";
import { render } from "react-dom";
import Greeter from "./greeter.js";

React.render(<Greeter />, document.getElementById("root"));