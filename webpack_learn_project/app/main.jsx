/* var greet = require("./greeter");

document.querySelector("#root").appendChild(greet()); */

import { React } from "react";
import { ReactDOM} from "react-dom";
import Greeter from "./greeter";

ReactDOM.render(<Greeter />, document.getElementById("root"));