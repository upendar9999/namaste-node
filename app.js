require("./xyz.js"); //one module into another
//import {calculateSum} from "./sum.js";

const util = require("node:util");

const { calculateSum,calculateMultiply } = require("./calculate");

const data = require("./data.json");

console.log(data);

var name = "Namaste Nodejs";

var a = 10;
var b = 20;
//var x = 100;
calculateSum(a,b);
calculateMultiply(a,b);
