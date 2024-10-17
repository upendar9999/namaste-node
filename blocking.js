const crypto = require("crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

//Synchronous function - will block the main thread
crypto.pbkdf2Sync("password","salt",500000,50,"sha512");
console.log("First Key is generated");

setTimeout(()=>{
    console.log("call me right now!!!!");
},0);//It will be only be called once call stack of main thread is empty

crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key)=>{
    console.log("Second Key is generated");
});

function multiplyFn(x,y){
    const result = a*b;
    return result;
}

var c = multiplyFn(a,b);

console.log("Multiplication result is:",c);